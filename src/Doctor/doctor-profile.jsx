import { WhatsApp } from "@mui/icons-material"; 
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function DoctorProfile() {

    const [cookies, setCookie, removeCookie] = useCookies('doctor');
    const [appointments, setAppointments] = useState([{ patientName: '', mobileNo: 0, specialization: '', doctor: '', Date: new Date(), slot: '' }]);
    
    // State to manage prescribed medications
    const [medications, setMedications] = useState([{ name: "", dosage: "" }]);
    
    // State for form details
    const [patientName, setPatientName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [additionalInstructions, setAdditionalInstructions] = useState("");
    const [isPrintVisible, setIsPrintVisible] = useState(false);  // To control print visibility

    let navigate = useNavigate();

    function handleSignout() {
        removeCookie('doctor');
        toast.error('Doctor Has Been Logged Out', {
            autoClose: 3000
        });
        setTimeout(() => {
            navigate("/doctor-login");
        }, 3000);
    }

    useEffect(() => {
        if (cookies['doctor'] == undefined) {
            navigate('/doctor-login');
        } 
    }, []);

    // Function to add a new medication input
    const handleAddMedication = () => {
        setMedications([...medications, { name: "", dosage: "" }]);
    };

    // Handle form submission for print button
    const handlePrint = () => {
        setIsPrintVisible(true);
    };

    return (
        <div className="grid grid-cols-12 relative top-[150px]">
            <div className="col-span-2 h-[800px]">
                <Link to={'/doctor-dashboard'}>
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Dashboard</h1>
                </Link>
                <Link to={'/doctor-appointment'}>
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Appointments</h1>
                </Link>
                <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Prescription</h1>
            </div>

            <div className="relative -top-36 bg-blue-50 p-20 col-span-10">

                <div className="rounded-md p-8 shadow-2xl bg-white mt-10 max-w-4xl mx-auto">
                    {/* Prescription Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-xl font-semibold text-gray-700">
                            <h1 className="text-2xl font-bold">Prescription</h1>
                            <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                            <h2 className="text-xl font-bold">{cookies['doctor']}</h2>
                            <p className="text-sm text-gray-500">General Practitioner</p>
                            <p className="text-sm text-gray-500">License No: 123456</p>
                        </div>
                    </div>

                    {/* Patient Information Form */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Patient Information</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Patient Name:</label>
                                <input
                                    type="text"
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter patient name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Age:</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter age"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Gender:</label>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Address:</label>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter patient address"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Prescribed Medications */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Prescribed Medications</h2>
                        {medications.map((medication, index) => (
                            <div key={index} className="flex justify-between items-center mb-4">
                                <input
                                    type="text"
                                    value={medication.name}
                                    onChange={(e) => {
                                        const newMedications = [...medications];
                                        newMedications[index].name = e.target.value;
                                        setMedications(newMedications);
                                    }}
                                    className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter medication name"
                                />
                                <input
                                    type="text"
                                    value={medication.dosage}
                                    onChange={(e) => {
                                        const newMedications = [...medications];
                                        newMedications[index].dosage = e.target.value;
                                        setMedications(newMedications);
                                    }}
                                    className="w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Dosage"
                                />
                            </div>
                        ))}
                        <button
                            onClick={handleAddMedication}
                            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300"
                        >
                            Add Medication
                        </button>
                    </div>

                    {/* Additional Instructions */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Additional Instructions</h2>
                        <textarea
                            value={additionalInstructions}
                            onChange={(e) => setAdditionalInstructions(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Enter additional instructions"
                        ></textarea>
                    </div>

                    {/* Print Button */}
                    <div className="flex justify-end">
                        <button
                            onClick={handlePrint}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            Print Prescription
                        </button>
                    </div>

                </div>

                {/* Show the prescription details after clicking "Print Prescription" */}
                {isPrintVisible && (
                    <div className="mt-10 p-8 w-[800px] mx-auto bg-white rounded-md shadow-2xl">
                        <div className="flex justify-between items-center mb-8">
                            <div className="text-xl font-semibold text-gray-700">
                                <h1 className="text-2xl font-bold">Prescription</h1>
                                <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</p>
                            </div>
                            <div className="text-right">
                                <h2 className="text-xl font-bold">{cookies['doctor']}</h2>
                                <p className="text-sm text-gray-500">General Practitioner</p>
                                <p className="text-sm text-blue-00">9960907232</p>
                                <p className="text-sm text-gray-500">License No: 123456</p>
                            </div>
                        </div>
                        <p><strong>Patient Name:</strong> {patientName}</p>
                        <p><strong>Age:</strong> {age}</p>
                        <p><strong>Gender:</strong> {gender}</p>
                        <p><strong>Address:</strong> {address}</p>

                        <h2 className="mt-5 text-xl font-semibold">Prescribed Medications</h2>
                        {medications.map((medication, index) => (
                            <p key={index}><strong>{medication.name}</strong> - {medication.dosage}</p>
                        ))}

                        <h2 className="mt-5 text-xl font-semibold">Additional Instructions</h2>
                        <p>{additionalInstructions}</p>
                    </div>
                )}
                
            </div>

            <ToastContainer />
        </div>
    );
}
