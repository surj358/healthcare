import { CheckCircle, Cancel } from "@mui/icons-material"; // Import the icons
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function DoctorDashboard() {

    const [cookies, setCookie, removeCookie] = useCookies("doctor");
    const [appointments, setAppointments] = useState([]);

    const [isPrescriptionClicked, setIsPrescriptionClicked] = useState(false);

    const handlePrescriptionClick = () => {
        setIsPrescriptionClicked(true);
    };

    let navigate = useNavigate();

    function handleSignout() {
        removeCookie("doctor");
        navigate("/doctor-login");
        toast.error("Doctor has been logged out", {
            autoClose: 3000,
        });
    }

    useEffect(() => {
        if (cookies["doctor"] === undefined) {
            navigate("/doctor-login");
        } else {
            axios.get(`http://127.0.0.1:6060/get-appointments`).then((response) => {
                setAppointments(response.data);
            });
        }
    }, []);

    return (
        <div className="grid grid-cols-12 relative top-[150px]">

            <div className="col-span-2 h-[800px]">
                <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Dashboard</h1>
                <Link to={'/doctor-appointment'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Appointments</h1></Link>
                <Link to={'/doctor-profile'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Prescription</h1></Link>
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

                <div>

                    <div className="grid grid-cols-3 -mb-5 gap-10">
                        <div className="rounded-md flex items-center p-5 shadow-lg bg-white my-10">
                            <img className="w-20" src="./money.avif" alt="" />
                            <h1 className="text-2xl"><span className="font-bold mx-1">$ 200</span>Earnings</h1>
                        </div>
                        <div className="rounded-md flex items-center p-5 shadow-lg bg-white my-10">
                            <img className="w-14 me-2" src="./appointment.png" alt="Appointment Icon" />
                            <h1 className="text-2xl">
                                <span className="font-bold mx-1">
                                    {appointments.filter(appointment => appointment.doctor === cookies["doctor"]).length}
                                </span>
                                Appointments
                            </h1>
                        </div>

                        <div className="rounded-md flex items-center p-5 shadow-lg bg-white my-10">
                            <img className="w-14 me-2" src="./patient.png" alt="" />
                            <h1 className="text-2xl"><span className="font-bold mx-1">3</span>Patient</h1>
                        </div>
                    </div>

                </div>



                {/* Today's Appointments Table */}
                <div className="overflow-x-auto bg-white p-5 shadow-2xl rounded-lg mt-10">
                    <h2 className="text-xl font-semibold mb-5">Today's Appointments</h2>
                    {appointments
                        .filter((appointment) => 
                            appointment.doctor === cookies["doctor"] && 
                            moment(appointment.date).isSame(moment(), 'day') // Filter for today's appointments
                        )
                        .map((appointment) => (
                            <div
                                className="p-6 rounded-xl shadow-lg mb-6 bg-white"
                                key={appointment.id}
                            >
                                <div className="grid grid-cols-4 gap-6">
                                    <div className="flex flex-col">
                                        <label className="font-semibold text-gray-700">Patient Name:</label>
                                        <p>{appointment.patientName}</p>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-semibold text-gray-700">Date:</label>
                                        <p>{moment(appointment.date).format("dddd, MMMM Do YYYY")}</p>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-semibold text-gray-700">Timing:</label>
                                        <p>{appointment.slot}</p>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-semibold text-gray-700">Status:</label>
                                        <Link to={"/doctor-profile"}><p className="underline text-blue-600" onClick={handlePrescriptionClick}>Prescriptions</p></Link>

                                        {/* Conditionally render "Completed" when the link is clicked */}
                                        {isPrescriptionClicked && (
                                            <p className="text-green-600 mt-2">Completed</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {appointments.filter((appointment) => 
                        appointment.doctor === cookies["doctor"] && 
                        moment(appointment.date).isSame(moment(), 'day')
                    ).length === 0 && (
                        <p className="text-center text-gray-500">No appointments for today.</p>
                    )}
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}
