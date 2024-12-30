import { WhatsApp } from "@mui/icons-material";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function AdminDashboard(){

    const [cookies, setCookie, removeCookie] = useCookies('userid');
    const [appointments, setAppointments] = useState([{patientName:'', mobileNo:0, specialization:'', doctor:'', date:new Date(), slot:'', id:""}]);

    let navigate = useNavigate();

    function handleSignout(){
        removeCookie('userid');
        navigate('/admin-login');
        toast.error('Admin Has Been LogOut',{
            autoClose:3000
        })
    }

    useEffect(()=>{
        if(cookies['userid']==undefined){
            navigate('/admin-login');
        } else {
            axios.get(`http://127.0.0.1:6060/get-appointments`)
            .then(response=>{
                setAppointments(response.data);
            })
        }
    },[])


    return(
        <div className="grid grid-cols-12 relative top-[150px]">

                <div className="col-span-2 h-[800px]">
                    <Link to={'/dashboard-2'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Dashboard</h1></Link>
                    <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Appointments</h1>
                    <Link to={'/add-doctors'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Add Doctors</h1></Link>
                    <Link to={'/doctor-list'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Doctors List</h1></Link>
                </div>

        
            <div className="relative -top-36 bg-blue-50 pt-10 p-20 col-span-10">
                <div className="flex justify-between items-center p-5">
                    <span className="flex text-center gap-3">
                          <h1 className="text-2xl relative">- Welcome to the</h1>
                          <h1 className="text-2xl font-semibold -me-6 uppercase">{cookies['userid']}</h1>
                    </span>
                    <div>
                        <button onClick={handleSignout} className="bg-red-600 text-white font-semibold px-5 py-2 rounded-md shadow-md shadow-slate-600 hover:scale-105 duration-300">Signout</button>
                    </div>
                </div>

                    <div className="bg-white shadow-md text-center mt-10 grid grid-cols-12 border-2">
                        
                        <div className="p-3 font-bold col-span-3 ">
                            <h1> Patient</h1>
                        </div>

                        <div className="p-3 font-bold col-span-2">
                            <h1>Date & time</h1>
                        </div>

                        <div className="p-3 font-bold col-span-3">
                            <h1>Doctor</h1>
                        </div>

                        <div className="p-3 font-bold col-span-2">
                            <h1>Time</h1>
                        </div>

                        <div className="p-3 font-bold col-span-2">
                            <h1>Action</h1>
                        </div>
                        
                    </div>

                    <div className="bg-white mt-2 shadow-md text-center border-1">
                        
                        {
                            appointments.map(appointments =>

                                <div className="grid grid-cols-12 justify-evenly px-2 py-2 cursor-pointer hover:bg-gray-100 border-b-2 duration-300">
                                    <div className="col-span-3 justify-center px-2 py-2 text-center"><h2>{appointments.patientName}</h2></div>
                                    <div className="col-span-2 justify-center text-center px-2 py-2"><p> {moment(appointments.date).format('ddd, Do MMM  YYYY')}</p></div>
                                    <div className="col-span-3 px-2 py-2"><p> {appointments.doctor}</p></div>
                                    <div className="col-span-2 px-2 py-2"><p> {appointments.slot} </p></div>
                                    <div className="col-span-2 px-2 py-2"><p>{appointments.mobileNo}</p></div>
                                </div>
                            )
                        }
                        
                    </div>                
            </div>

            <div>
                
            </div>
            <ToastContainer />
        </div>    
    )
}