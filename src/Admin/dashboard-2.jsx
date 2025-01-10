import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

export function Dashboard2() {
    const [cookies, setCookie, removeCookie] = useCookies("userid");
    const [appointments, setAppointments] = useState([{ patientName: "", slot: "", mobileNo: 0, doctor: "", date: new Date(), id: "" }]);

    let navigate = useNavigate();

    useEffect(() => {
        if (cookies["userid"] === undefined) {
            navigate("/admin-login");
        } else {
            axios.get(`http://127.0.0.1:6060/get-appointments`)
                .then(response => {
                    setAppointments(response.data);
                });
        }
    }, []);

    return (
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
                        <h1 className="text-lg flex flex-col mx-2"><span className="font-bold text-2xl">15</span>Doctors</h1>
                    </div>
                    <div className="rounded-md flex items-center p-5 shadow-lg bg-white my-10">
                        <img className="w-14 me-2" src="./appointment.png" alt="" />
                        <h1 className="text-lg flex flex-col">
                            <span className="font-bold text-2xl mx-1">{appointments.filter(appointment => moment(appointment.date).isSame(moment(), "day")).length}</span>
                            Today's Appointments
                        </h1>
                    </div>
                    <div className="rounded-md flex items-center p-5 shadow-lg bg-white my-10">
                        <img className="w-14 me-2" src="./patient.png" alt="" />
                        <h1 className="text-lg flex flex-col">
                            <span className="font-bold text-2xl mx-1">{appointments.filter(appointment => moment(appointment.date).isSame(moment().add(1, "day"), "day")).length}</span>
                            Tomorrow's Appointments
                        </h1>
                    </div>
                </div>

                {/* Section for Today's Appointments */}
                <div className="rounded-t-lg p-4 border-b-2 border-blue-600 shadow-lg bg-white mt-10">
                    <h1 className="text-2xl font-bold">Today's Appointments</h1>
                </div>
                <div className="bg-white shadow-md text-center border-1">
                    {
                        appointments
                            .filter(appointment => moment(appointment.date).isSame(moment(), "day")) // Filter today's appointments
                            .sort((a, b) => moment(a.date).isBefore(moment(b.date)) ? -1 : 1) // Sort by time
                            .map(appointment => (
                                <div
                                    className="grid grid-cols-12 justify-evenly px-2 py-2 cursor-pointer hover:bg-yellow-100 border-b-2 duration-300"
                                    key={appointment.id}
                                >
                                    <div className="col-span-3 text-start ps-10 px-2 py-2 font-semibold text-blue-800">
                                        <h2>{appointment.doctor}</h2>
                                    </div>
                                    <div className="col-span-3 justify-center px-2 py-2 text-center">
                                        <h2>{appointment.patientName}</h2>
                                    </div>
                                    <div className="col-span-2 px-2 py-2">
                                        <h2>{appointment.mobileNo}</h2>
                                    </div>
                                    <div className="col-span-2 px-2 py-2">
                                        <p>{moment(appointment.date).format('ddd, Do MMM YYYY')}</p>
                                    </div>
                                    <div className="col-span-2 px-2 py-2">
                                        <h2>{appointment.slot}</h2>
                                    </div>
                                </div>
                            ))
                    }
                </div>

                {/* Section for Tomorrow's Appointments */}
                {/* <div className="rounded-t-lg p-4 border-b-2 border-blue-600 shadow-lg bg-white mt-10">
                    <h1 className="text-2xl font-bold">Tomorrow's Appointments</h1>
                </div> */}
                <div className="bg-white shadow-md text-center border-1">
                    {
                        appointments
                            .filter(appointment => moment(appointment.date).isSame(moment().add(1, "day"), "day")) // Filter tomorrow's appointments
                            .sort((a, b) => moment(a.date).isBefore(moment(b.date)) ? -1 : 1) // Sort by time
                            .map(appointment => (
                                <div
                                    className="grid grid-cols-12 justify-evenly px-2 py-2 cursor-pointer hover:bg-yellow-100 border-b-2 duration-300"
                                    key={appointment.id}
                                >
                                    <div className="col-span-3 text-start ps-10 px-2 py-2 font-semibold text-blue-800">
                                        <h2>{appointment.doctor}</h2>
                                    </div>
                                    <div className="col-span-3 justify-center px-2 py-2 text-center">
                                        <h2>{appointment.patientName}</h2>
                                    </div>
                                    <div className="col-span-2 px-2 py-2">
                                        <h2>{appointment.mobileNo}</h2>
                                    </div>
                                    <div className="col-span-2 px-2 py-2">
                                        <p>{moment(appointment.date).format('ddd, Do MMM YYYY')}</p>
                                    </div>
                                    <div className="col-span-2 px-2 py-2">
                                        <h2>{appointment.slot}</h2>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}
