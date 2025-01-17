import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

//everything working


export function TodoDashBoard(){

    const [cookies, setCookie, removeCookie] = useCookies('username');
    const [appointments, setAppointments] = useState([{patientName:'', mobileNo:0, specialization:'', doctor:'', date:new Date(), slot:'', UserName:''}]);

    let navigate = useNavigate();

    function handleSignout(){
        removeCookie('username');
        navigate('/login');
        alert('User has Been Logout....!')
        // toast.error('user Has Been LogOut',{
        //     autoClose:3000
        // })
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
                    <Link to={'/book-appointment'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Book Appointments</h1></Link>
                    <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Appointment History</h1>
                    {/* <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Edit</h1> */}
                </div>

        
            <div className="relative -top-36 bg-blue-50 p-20 col-span-10">
                <div className="flex justify-between p-5">
                    <span className="flex text-center">
                        <h1 className="text-3xl font-semibold uppercase">Dear {cookies['username']}</h1>
                        <h1 className="text-2xl top-[2px] relative">- Welcome to the Dashboard....!</h1>
                    </span>
                    <div>
                        <button onClick={handleSignout} className="bg-red-600 text-white font-semibold px-5 py-2 rounded-md shadow-md shadow-slate-600 hover:scale-105 duration-300">Signout</button>
                    </div>
                </div>

                <div className="rounded-md p-8 shadow-2xl bg-white mt-10">
                {appointments.reverse().map((appointment) => {
                    // Check if the appointment date is before or after the current date
                    const isCompleted = moment(appointment.date).isBefore(moment());

                    return (
                    <div className="text-black gap-20 flex p-5 rounded-lg mt-5 bg-blue-50" key={appointment.id}>
                        <div>
                        <div className="flex px-2 py-2">
                            <h2 className="me-3">Patient Name :- </h2>
                            <h2 className="font-semibold">{appointment.patientName}</h2>
                        </div>
                        <div className="flex px-2 py-2">
                            <p className="me-3">Mobile No. :- </p>
                            <p className="font-semibold">{appointment.mobileNo}</p>
                        </div>
                        <div className="flex px-2 py-2">
                            <p className="me-3">Date :- </p>
                            <p className="font-semibold">{moment(appointment.date).format('dddd, MMMM Do YYYY')}</p>
                        </div>
                        </div>
                        <div>
                        <div className="flex px-2 py-2">
                            <p className="me-3">Doctor :-</p>
                            <p className="font-semibold">{appointment.doctor}</p>
                        </div>
                        <div className="flex px-2 py-2">
                            <p className="me-3">Timing Am/Pm :- </p>
                            <p className="font-semibold">{appointment.slot}</p>
                        </div>
                        {/* Status Badge */}
                        <div
                            className={`ps-2 py-1 absolute font-sans rounded-md ${isCompleted ? 'text-green-500' : 'text-red-500'}`}
                        >
                            {isCompleted ? 'Completed' : 'Pending'}
                        </div>
                        
                        </div>

                        <div>
                            {/* Show the Cancel Appointment button only if the appointment is today or in the future */}
                            {!moment(appointment.date).isBefore(moment(), "day") && (
                                <Link
                                    to={`/delete-task/${appointment.patientName}`}
                                    className="relative top-4 left-10 px-5 text-sm font-semibold py-2 rounded-md shadow-md text-white bg-red-500"
                                >
                                    Cancel Appointment
                                </Link>
                            )}
                        </div>
                    </div>
                    );
                })}
                </div>

                
            </div>

            <div>
                
            </div>

        </div>    
    )
}