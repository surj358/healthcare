import { Link,useNavigate } from "react-router-dom"
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useFormik } from "formik";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from "react-cookie";
import { useState } from "react";

export function DoctorLogin() {

    let navigate = useNavigate();   
    const [cookies, setCookie, removeCookie] = useCookies('doctor')


    // Form submission handler
    const formik = useFormik({
        initialValues: {
            UserName:'',
            Password:''
        },
        onSubmit: (user)=> {
            axios.get(`http://127.0.0.1:6060/get-all-doctors`)
            .then(response=> {
                    var client = response.data.find(record => record.DoctorName===user.UserName);
                    if(client)
                    {
                        if(user.Password===client.Password)
                            {   
                                setCookie('doctor', user.UserName);
                                toast.success("Doctor has been logged in", {
                                  autoClose: 2000,
                                  position: "top-right", // Use string for position
                              });
                              setTimeout(() => {
                                  navigate("/doctor-dashboard"); // Delay navigation until toast displays
                              }, 2000); // Matches the autoClose duration of the toast

                            } else {
                                toast.error('Please enter a Valid Password....!', {
                                  autoClose:4000,
                                  style: {
                                    font: 'bold', 
                                  }
                                })
                            }
                    } else {
                        alert('user not registerd....!');
                        // toast.error('You are not User Registered....!', {
                        //   autoClose:4000,
                        //   style: {
                        //     font: 'bold', 
                        //   }
                        // })
                        navigate('/doctor-login');
                    }
            })
        }
    })

    return(

        <div>

                <div style={{position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 350,
                    bgcolor: 'background.paper',
                    borderRadius: 15,
                    alignItems: 'center',
                    p: 4,}}

                    className=" px-10 py-8 shadow-2xl"
                  
                >
                  <div className="text-center mt-2">
                    <h1 className="text-3xl font-bold">Doctor-Login</h1>
                  </div>
                  <form onSubmit={formik.handleSubmit} className="bg-light p-4 m-3 w-25"> 

                    <TextField
                      label="Your Name"
                      variant="standard"
                      margin="normal"
                      name="UserName"
                      required
                      onChange={formik.handleChange}
                    /> 

                    <TextField
                      label="Password"
                      variant="standard"
                      type="password"
                      fullWidth
                      margin="normal"
                      required
                      name="Password"
                      onChange={formik.handleChange}
                    />                   
                      
                    <Button variant="contained" size="medium" color="primary" type="submit" sx={{ fontWeight: 'bold',textTransform: 'capitalize', backgroundColor: 'light-blue', width: '100%', marginTop:'25px' }}>Login </Button>
                  
                  </form>
                  <Link to={'/admin-login'}><p className="text-base my-5">Admin Login then<span className="cursor-pointer text-blue-600 font-semibold ms-2"  >click here</span></p></Link>

                  
                </div>

                <ToastContainer />
                

        </div>
    )
}