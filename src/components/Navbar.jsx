import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from '../assets/assets';
import { Modal, Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from "react-cookie";


export function Navbar() {

    const [cookies, setCookie, removeCookie] = useCookies('username');

    const [msg, setMsg] = useState('');
    const [validClass, setValidClass] = useState('');

    let navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)
    const [open, setOpen] = useState(false);

  // Function to open the modal
    function handleOpen() {
      setOpen(true)
    }
  // Function to close the modal
    const handleClose = () => {      
      setOpen(false)
      navigate("/login")
    };

  // react-hook- form VALidation
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      UserName: '',
      Password: '',
      Email: '',
      Mobile: ''
    }
  });

  // Form submission handler
  const onSubmit = async (data) => {
    try {
      await axios.post('http://127.0.0.1:6060/register-user', data);
      navigate('/login');
      alert('user registerd Succesfully...!')
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    }
    setOpen(false)
  };


  function VerifyUserId(e){
    axios.get(`http://127.0.0.1:6060/get-users`)
    .then(response=> {
         for(var user of response.data)
         
            {
                if(user.UserName===e.target.value){
                     setMsg('User Id Taken - Try Another');
                     setValidClass('text-red-600 text-base');
                     break;
                } else {
                    setMsg('User Id Available');
                    setValidClass('text-green-600 text-base');
                }
            }
    })

    
}

    return (
        <div>

            <div className="flex items-center justify-between text-sm pt-4 pb-1 border-b border-b-grey">
                <div onClick={()=>navigate('/')} className="flex justify-center items-center cursor-pointer">
                <img className="size-16" src="logo blue.jpg" alt="" />
                <h1 className=" font-bold text-3xl text-blue-600 ml-2">HealthCare</h1>
                </div>

                <ul className="hidden md:flex item-start gap-5 font-medium">
                    <Link to="/" >
                      <li className="py-1 hover:text-blue-600 font-bold active:text-primary">Home</li>
                      <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                    </Link>

                    <Link to="/doctor">
                      <li  className="py-1 hover:text-primary font-bold active:text-primary">All Doctors </li>
                      <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
                    </Link>

                    <Link to="/about">
                        <li  className="py-1 hover:text-primary font-bold active:text-primary">About</li>
                        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                    </Link>    

                    <Link to="/contact">
                        <li  className="py-1 hover:text-primary font-bold active:text-primary">Contact</li>
                        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                    </Link>   

                    <Link to="/demo">
                        <li  className="py-1 hover:text-primary active:text-primary">Demo</li>
                        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />                    
                    </Link> 
        
                </ul>
                
                
                <div className="flex items-center">
                    <div>
                      <Link className=" lg:inline-block sm:hidden" to={'/admin-login'}><Button variant="contained" size="medium" color="primary" sx={{ fontWeight: 'bold',textTransform: 'capitalize', backgroundColor: 'blue' }}>Admin</Button></Link>
                     <Button variant="contained" size="medium" color="primary" sx={{ fontWeight: 'bold',textTransform: 'capitalize', backgroundColor: 'blue',marginX:"15px" }} onClick={handleOpen}> Book Appointmnet</Button>
                    </div>

                    <img onClick={()=> setShowMenu(true)} className="w-6 md:hidden lg:hidden" src={assets.menu_icon} alt="" />
                    <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-300 `}>
                      <div className=" mx-3 my-2 border-b-2 pb-5 flex justify-between items-center">
                        <span onClick={() => navigate('/')} className="flex items-center gap-3"><img className="size-24"  src='logo blue.jpg' alt="" /> <h1 className="text-blue-600 font-bold text-4xl">Healthcare</h1></span>
                        <img  className="size-10 cursor-pointer" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                      </div>
                      <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                        <Link  onClick={() => setShowMenu(false)} to='/'> <p className="px-4 py-2 rounded-lg inline-block font-bold text-base hover:bg-blue-600 hover:text-white">Home</p></Link>
                        <Link  onClick={() => setShowMenu(false)} to='/doctor'><p className="px-4 py-2 rounded-lg inline-block font-bold text-base hover:bg-blue-600 hover:text-white">All Doctors</p></Link>
                        <Link  onClick={() => setShowMenu(false)} to='/about'><p className="px-4 py-2 rounded-lg inline-block font-bold text-base hover:bg-blue-600 hover:text-white">About</p></Link>
                        <Link onClick={() => setShowMenu(false)} to='/contact'><p className="px-4 py-2 rounded-lg inline-block font-bold text-base hover:bg-blue-600 hover:text-white">Contact</p></Link>
                      </ul>
                    </div>
                </div>
            
            </div> 

            <div>
              {/* Button to open the modal */}

              {/* Modal component */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <div className="text-center mt-2 mb-2">
                  <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                  <p className="text-sm">Please <span className="text-blue-600">Sign_Up</span> to book an Appointment</p>    
                  </div>
                  
                  {/* Form inside the modal */}
                  <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                      label="Your Name"
                      onKeyUp={VerifyUserId}
                      variant="standard"
                      fullWidth
                      margin="normal"
                      {...register('UserName', { required: 'UserName is required' })}
                      error={!!errors.UserName}
                      helperText={errors.UserName ? errors.UserName.message : ''}
                    />
                    <dd className={validClass}> {msg} </dd>

                    {/* Email Field */}
                    <TextField
                      label="Email"
                      variant="standard"
                      fullWidth
                      type="email"
                      {...register('Email', { 
                        required: 'Email is required', 
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                          message: 'Invalid Email address'
                        }
                      })}
                      error={!!errors.Email}
                      helperText={errors.Email ? errors.Email.message : ''}
                    />

                    {/* mobileno. */}
                    <TextField
                      label="Mobile No."
                      variant="standard"
                      fullWidth
                      margin="normal"
                      {...register('Mobile', { required: 'Mobile number is required' })}
                      error={!!errors.Mobile}
                      helperText={errors.Mobile ? errors.Mobile.message : ''}
                    />

                    {/* Password Field */}
                    <TextField
                      label="Password"
                      variant="standard"
                      fullWidth
                      type="password"
                      {...register('Password', { 
                        required: 'Password is required', 
                      })}
                      error={!!errors.Password}
                      helperText={errors.Password ? errors.Password.message : ''}
                      sx={{margin:'5px 0px'}}
                    />

                    <Button variant="contained" size="medium" color="primary" type="submit" sx={{ fontWeight: 'bold',textTransform: 'capitalize', backgroundColor: 'light-blue', width: '100%', marginTop:'15px' }} onClick={handleOpen}> Create Account </Button>

                  </form>

                  <p className="text-base my-5">Already have an account..? <span className="text-blue-600 cursor-pointer font-semibold" onClick={handleClose}>Login Here</span></p>    

                  {/* dismiss button */}
                  {/* <Button variant="contained" color="secondary" onClick={handleClose}>
                        X
                      </Button> */}
                </Box>
              </Modal>
            </div>

            <ToastContainer />


        </div>
    )
}