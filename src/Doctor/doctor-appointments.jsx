import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function DoctorAppointments() {
    const [cookies, setCookie, removeCookie] = useCookies("doctor");
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    // Handle signout
    const handleSignout = () => {
        removeCookie("doctor");
        toast.error("Doctor has been logged out", { autoClose: 3000, position: "top-right" });
        setTimeout(() => {
            navigate("/doctor-login");
        }, 3000);
    };

    // Fetch appointments on load
    useEffect(() => {
        if (!cookies["doctor"]) {
            navigate("/doctor-login");
        } else {
            // Fetch appointments from the API
            axios.get(`http://127.0.0.1:6060/get-appointments`)
                .then((response) => {
                    const doctorAppointments = response.data.filter(appointment => appointment.doctor === cookies["doctor"]);
                    setAppointments(doctorAppointments);
                    localStorage.setItem("appointments", JSON.stringify(doctorAppointments)); // Save to localStorage
                })
                .catch((error) => {
                    console.error("Error fetching appointments:", error);
                });
        }
    }, [cookies, navigate]);

    return (
        <div className="grid grid-cols-12 relative top-[150px]">
            {/* Sidebar */}
            <div className="col-span-2 h-[800px]">
                <Link to="/doctor-dashboard">
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500">
                        Dashboard
                    </h1>
                </Link>
                <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500">
                    Appointments
                </h1>
                <Link to="/doctor-profile">
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500">
                    Prescription
                    </h1>
                </Link>
            </div>

            {/* Appointments */}
            <div className="relative -top-36 bg-blue-50 p-20 col-span-10">
                <div className="flex justify-between items-center p-5">
                    <span className="flex text-center gap-3">
                        <h1 className="text-2xl relative">- Welcome</h1>
                        <h1 className="text-2xl font-semibold -me-6 uppercase">{cookies["doctor"]}</h1>
                    </span>
                    <button
                        onClick={handleSignout}
                        className="bg-red-600 text-white font-semibold px-5 py-2 rounded-md shadow-md shadow-slate-600 hover:scale-105 duration-300"
                    >
                        Signout
                    </button>
                </div>

                <div className="mt-8">
                    {appointments.length > 0 ? (
                        appointments.reverse().map((appointment) => {
                            const isBeforeToday = moment(appointment.date).isBefore(moment(), "day");
                            const status = isBeforeToday ? "Completed" : "Upcoming";

                            return (
                                <div
                                    key={appointment.id}
                                    className={`p-6 rounded-xl shadow-lg mb-6 ${status === "Completed" ? "bg-green-100" : "bg-white"}`}
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
                                            <p>{status}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center text-gray-500">No appointments available.</p>
                    )}
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}
