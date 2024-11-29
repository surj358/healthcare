import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


export function AdminDashboard(){

    const [cookies, setCookie, removeCookie] = useCookies('username');
    const [appointments, setAppointments] = useState([{Title:'', Description:'', Date:new Date(), PatientName:''}]);

    let navigate = useNavigate();

    function handleSignout(){
        removeCookie('username');
        navigate('/admin-login');
        toast.error('Admin Has Been LogOut',{
            autoClose:3000
        })
    }

    useEffect(()=>{
        if(cookies['username']==undefined){
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
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Dashboard</h1>
                    <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Appointments</h1>
                    <Link to={'/add-doctors'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Add Doctors</h1></Link>
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Doctors List</h1>
                </div>

        
            <div className="relative -top-36 bg-blue-50 p-20 col-span-10">
                <div className="flex justify-between items-center p-5">
                    <span className="flex text-center gap-3">
                          <h1 className="text-2xl relative">- Welcome to the</h1>
                          <h1 className="text-2xl font-semibold -me-6 uppercase">{cookies['username']}</h1>
                    </span>
                    <div>
                        <button onClick={handleSignout} className="bg-red-600 text-white font-semibold px-5 py-2 rounded-md shadow-md shadow-slate-600 hover:scale-105 duration-300">Signout</button>
                    </div>
                </div>

                    <div className="rounded-md p-8 shadow-2xl bg-white mt-20">
                        {
                            appointments.map(appointments =>
                                <div className="bg-yellow-400 mb-5 p-10">
                                    <h2>{appointments.Title} </h2>
                                    <p>{appointments.Description}</p>
                                    <p>{moment(appointments.Date).format('dddd, MMMM Do YYYY')}</p>
                                    <p>{appointments.PatientName} </p>

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