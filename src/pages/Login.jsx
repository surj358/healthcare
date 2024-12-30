import { useNavigate } from "react-router-dom"
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useFormik } from "formik";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from "react-cookie";


export function Login() {

    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies('username')

     // react-hook- form VALidation
    // const { register, handleSubmit, formState: { errors } } = useForm({

    //   defaultValues: {
    //     UserName: '',
    //     Password: ''
    //   }
      
    // });

    // Form submission handler
    const formik = useFormik({
      initialValues: {
          UserName:'',
          Password:''
      },
      onSubmit: (user)=> {
          axios.get(`http://127.0.0.1:6060/get-users`)
          .then(response=> {
                  var client = response.data.find(record => record.UserName===user.UserName);
                  if(client)
                  {
                      if(user.Password===client.Password)
                          {   
                              alert('User Login Successfully');
                              setCookie('username', user.UserName);
                              toast.success('user Login Successfully....!', {
                                autoClose:3000,
                              })
                              navigate("/dashboard");
                          } else {
                              toast.error('Please enter a Valid Password....!', {
                                autoClose:4000,
                                style: {
                                  font: 'bold', 
                                }
                              })
                          }
                  } else {
                      toast.error('You are not Regester User', {
                        autoClose:3000,
                      });
                  }
          })
      }
  })
    
    return (

        <div className="h-[700px] w-full bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/clipboard-stethoscope_23-2148519763.jpg?t=st=1733475111~exp=1733478711~hmac=ac3139ec40228be5dd89f53e501db271fefc8de18d4d2c771c33717808804bc3&w=1060')]">

                {/* <div style={{position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 350,
                    bgcolor: 'background.paper',
                    borderRadius: 15,
                    p: 4,}}

                    className=" px-10 py-8 shadow-2xl"
                  
                >
                  <div className="text-center mt-2 mb-2">
                  <h1 className="text-3xl font-bold mb-2">Login</h1>
                  <p className="text-sm">Please <span className="text-blue-600 mb-3">log in</span> to book an Appointment</p>    
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}> */}

                    {/* Username Field */}
                    {/* <TextField
                      label="Your Name"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      {...register('UserName', { required: 'UserName is required' })}
                      error={!!errors.UserName}
                      helperText={errors.UserName ? errors.UserName.message : ''}
                    /> */}

                    {/* Password Field */}
                    {/* <TextField
                      label="Password"
                      variant="standard"
                      fullWidth
                      type="password"
                      {...register('password', { 
                        required: 'password is required', 
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                          message: 'Invalid Password'
                        }
                      })} */}
                      {/* error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ''}
                      sx={{margin:'10px 0px'}}
                    /> */}

                    {/* Message Field
                    <TextField
                      label="Message"
                      variant="standard"
                      fullWidth
                      multiline
                      rows={4}
                      {...register('message', { required: 'Message is required' })}
                      error={!!errors.message}
                      helperText={errors.message ? errors.message.message : ''}

                      sx={{margin:'5px 0px'}}
                    /> */}

                    {/* <Button variant="contained" size="medium" color="primary" type="submit" sx={{ fontWeight: 'bold',textTransform: 'capitalize', backgroundColor: 'light-blue', width: '100%', marginTop:'25px' }}>Login </Button>

                  </form> */}
                  

                  {/* <p className="text-base my-5">Create a new Account <span onClick={()=>(navigate('/'))} className="cursor-pointer text-blue-600 font-semibold"  >click here</span></p>     */}

                  {/* dismiss button */}
                  {/* <Button variant="contained" color="secondary" onClick={handleClose}>
                        X
                      </Button> */}
                {/* </div> */}


                <div style={{position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 350,
                    bgcolor: 'background.paper',
                    borderRadius: 15,
                    p: 4,}}

                    className=" px-10 py-8 shadow-2xl bg-white mt-10"
                  
                >
                  <div className="text-center mt-2 mb-2">
                    <h1 className="text-3xl font-bold mb-2">Login</h1>
                    <p className="text-sm">Please <span className="text-blue-600 mb-3">log in</span> to book an Appointment</p>    
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
                  <p className="text-base my-5">Create a new Account <span onClick={()=>(navigate('/'))} className="cursor-pointer text-blue-600 font-semibold"  >click here</span></p>    

                  
                </div>

                <ToastContainer />
                

        </div>
    )
}