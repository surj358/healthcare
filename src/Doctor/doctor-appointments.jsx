import { WhatsApp } from "@mui/icons-material";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function DoctorAppointments(){

    const [cookies, setCookie, removeCookie] = useCookies('doctor');
    const [appointments, setAppointments] = useState([{patientName:'', mobileNo:0, specialization:'', doctor:'', Date:new Date(), slot:''}]);

    let navigate = useNavigate();

    function handleSignout(){
        removeCookie('doctor');
        navigate('/doctor-login');
        toast.error('doctor Has Been LogOut',{
            autoClose:3000
        })
    }

    useEffect(()=>{
        if(cookies['doctor']==undefined){
            navigate('/doctor-login');
        } 
        
        // else {
        //     axios.get(`http://127.0.0.1:6060/get-appointments`)
        //     .then(response=>{
        //         setAppointments(response.data);
        //     })
        // }
    },[])


    return(
        <div className="grid grid-cols-12 relative top-[150px]">

                <div className="col-span-2 h-[800px]">
                    <Link to={'/doctor-dashboard'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Dashboard</h1></Link>
                    <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Appointments</h1>
                    <Link to={'/doctor-profile'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Profile</h1></Link>

                </div>

        
            <div className="relative -top-36 bg-blue-50 p-20 col-span-10">
                <div className="flex justify-between items-center p-5">
                    <span className="flex text-center gap-3">
                          <h1 className="text-2xl relative">- Welcome</h1>
                          <h1 className="text-2xl font-semibold -me-6 uppercase">{cookies['doctor']}</h1>
                    </span>
                    <div>
                        <button onClick={handleSignout} className="bg-red-600 text-white font-semibold px-5 py-2 rounded-md shadow-md shadow-slate-600 hover:scale-105 duration-300">Signout</button>
                    </div>
                </div>

                    <div className="rounded-md p-8 shadow-2xl bg-white mt-20">
                        {/* {
                            appointments.map(appointments =>
                                <div className="bg-yellow-400 p-2 mb-4">
                                    <div className="flex px-2 py-2">
                                        <h2 className="me-3">Patient Name :- </h2>
                                        <h2>{appointments.patientName}</h2>
                                    </div>  
                                    <div className="flex px-2 py-2"><p className="me-3">Mobile No. :- </p><p >{appointments.mobileNo}</p></div>
                                    <div className="flex px-2 py-2"><p className="me-3">Date :- </p><p> {moment(appointments.Date).format('dddd, MMMM Do YYYY')}</p></div>
                                    

                                    <div className="flex flex-col px-2 py-2"><p>Doctor :-</p><p> {appointments.doctor} </p></div>
                                    <p>Timing Am/Pm :-</p><p>{appointments.slot}</p>
                               </div>
                            )
                        } */}

                    </div>
                
            </div>

            <div>
                
            </div>
            <ToastContainer />
        </div>    
    )
}