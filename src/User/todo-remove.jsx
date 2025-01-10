import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function ToDoRemoveTask(){

    const [appointments, setAppointments] = useState([{patientName:'', mobileNo:0, specialization:'', doctor:'', date:new Date(), slot:''}]);

    let params = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
         axios.get(`http://127.0.0.1:6060/view-task/${params.id}`)
         .then(response=>{
             setAppointments(response.data);
         })
    },[])

    function handleRemoveClick(){
        axios.delete(`http://127.0.0.1:6060/delete-task/${params.id}`)
        .then(()=>{
            alert('Task Deleted');
            // toast.error('Appointment has been deleted', {
            //       autoClose:4000,
            //       style: {
            //         font: 'bold', 
            //       }
            // });
            navigate("/dashboard");         
        })
    }

    return(


        
        <div className="bg-blue-100 mt-20 px-14 py-10 shadow-md w-[550px] rounded-md mx-auto items-center">
           <div>
                <h3 className="font-bold mb-5 text-xl">Are your sure? Want to Delete Appointment?</h3>
                <dl  className="bg-white p-5 mt-5 rounded-md">
                    <div className="flex gap-5 mb-1">
                        <dt className="font-bold">Patient Name :-</dt>
                        <dd>{appointments[0].patientName}</dd>
                    </div>
                    
                    <div className="flex gap-5 my-2">
                     <dt className="font-bold">Doctor :-</dt>
                     <dd>{appointments[0].doctor}</dd>
                    </div>
                    <div className="flex gap-5 mb-1">
                    <dt className="font-bold">Date :-</dt>
                    <dd> {moment(appointments[0].date).format('Do MMMM, YYYY')} </dd>
                    </div>
                </dl>
                <div className="flex justify-between mt-5">
                <button onClick={handleRemoveClick} className="mt-4 w-28 font-bold py-1 rounded-md shadow-md bg-red-500">Yes</button>
                <Link to="/dashboard" className="mt-4 w-28 font-bold py-1 text-center rounded-md shadow-md bg-orange-400">No</Link>

                </div>
                
            </div>

            <ToastContainer/>
        </div>
    )
}