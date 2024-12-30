import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";

export function Dashboard2() {

    const [cookies, setCookie, removeCookie] = useCookies('userid');
    const [appointments, setAppointments] = useState([{patientName:'', mobileNo:0, specialization:'', doctor:'', Date:new Date(), slot:'', id:""}]);

    let navigate = useNavigate();

    useEffect(()=>{
        if(cookies['userid']==undefined){
            navigate('/admin-login');
        } else {
            axios.get(`http://127.0.0.1:6060/get-doctors-list`)
            .then(response=>{
                setAppointments(response.data);
            })
        }
    },[])

    return(

        <div className="grid grid-cols-12 relative top-[150px]">

                <div className="col-span-2 h-[800px]">
                    <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Dashboard</h1>
                    <Link to={'/admin-dashboard'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Appointments</h1></Link>
                    <Link to={'/add-doctors'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Add Doctors</h1></Link>
                    <Link to={'/doctor-list'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Doctors List</h1></Link>
                </div>

        
            <div className="relative -top-36 bg-blue-50 pt-10 p-20 col-span-10">
                
                <div className="grid grid-cols-3 -mb-5 gap-10">
                    <div className="rounded-md flex items-center p-5 shadow-lg bg-white my-10">
                        <img className="w-14" src="./doctor.png" alt="" />
                        <h1 className="text-2xl"><span className="font-bold mx-1">15</span>Doctors</h1>
                    </div>
                    <div className="rounded-md flex items-center p-5 shadow-lg bg-white my-10">
                        <img className="w-14 me-2" src="./appointment.png" alt="" />
                        <h1 className="text-2xl"><span className="font-bold mx-1">6</span>Appointments</h1>
                    </div>
                    <div className="rounded-md flex items-center p-5 shadow-lg bg-white my-10">
                        <img className="w-14 me-2" src="./patient.png" alt="" />
                        <h1 className="text-2xl"><span className="font-bold mx-1">3</span>Patient</h1>
                    </div>
                </div>
                
                <div className="rounded-t-lg p-4 border-b-2 border-blue-600 shadow-lg bg-white mt-10">
                    <h1 className="text-2xl font-bold">Latest-Bookings</h1>
                </div>

                <div className="rounded-md p-8 grid grid-cols-4 gap-5 shadow-2xl bg-white">

                {
                    appointments.map(appointments =>

                        <div className="grid grid-cols-12 justify-evenly px-2 py-2 cursor-pointer hover:bg-gray-100 border-b-2 duration-300">
                            <div className="col-span-3 justify-center px-2 py-2 text-center"><h2>{appointments.patientName}</h2></div>
                            <div className="col-span-2 justify-center text-center px-2 py-2"><p> {moment(appointments.Date).format('ddd, Do MMM  YYYY')}</p></div>
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
        </div>   
    )
}