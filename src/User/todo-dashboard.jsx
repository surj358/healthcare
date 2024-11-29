import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


export function TodoDashBoard(){

    const [cookies, setCookie, removeCookie] = useCookies('username');
    const [appointments, setAppointments] = useState([{Appointment_Id:0, Title:'', Description:'', Date:new Date(), UserId:''}]);

    let navigate = useNavigate();

    function handleSignout(){
        removeCookie('username');
        navigate('/login');
        toast.error('user Has Been LogOut',{
            autoClose:3000
        })
    }

    useEffect(()=>{
        if(cookies['username']==undefined){
            navigate('/login');
        } else {
            axios.get(`http://127.0.0.1:6060/view-tasks/${cookies['username']}`)
            .then(response=>{
                setAppointments(response.data);
            })
        }
    },[])


    return(
        <div className="grid grid-cols-12 relative top-[150px]">

                <div className="col-span-2 h-[800px]">
                    <Link to={'/add-task'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Book Appointments</h1></Link>
                    <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Appoitnment History</h1>
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Edit</h1>
                </div>

        
            <div className="relative -top-36 bg-blue-50 p-20 col-span-10">
                <div className="flex justify-between p-5">
                    <span className="flex text-center">
                        <h1 className="text-3xl font-semibold uppercase">Mr. {cookies['username']}</h1>
                        <h1 className="text-2xl top-[2px] relative">- Welcome to the Dashboard....!</h1>
                    </span>
                    <div>
                        <button onClick={handleSignout} className="bg-red-600 text-white font-semibold px-5 py-2 rounded-md shadow-md shadow-slate-600 hover:scale-105 duration-300">Signout</button>
                    </div>
                </div>

                    <div className="rounded-md p-8 shadow-2xl bg-white mt-20">

                        {
                            appointments.map(appointment=> 
                                <div className=" text-black p-5 rounded-lg mt-5 bg-blue-50">
                                    <h2>{appointment.Title}</h2>
                                    <p>{appointment.Description}</p>
                                    <p>{moment(appointment.Date).format('dddd, MMMM Do YYYY')}</p>
                                    <Link to={`/delete-task/${appointment.Appointment_Id}`} className="bg-red-500 px-3 py-1 mt-16 text-white rounded-lg" >Cancel Appointment</Link>
                                </div>

                            )
                        }
                    </div>
                
            </div>

            <div>
                
            </div>

        </div>    
    )
}