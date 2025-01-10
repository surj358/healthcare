import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function Deletedoc(){

    const [alldoctors, setAllDoctors] = useState([{DoctorName:'',Speciality:"", DoctorEmail:""}]);

    let params = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
         axios.get(`http://127.0.0.1:6060/view-doctor/${params.id}`)
         .then(response=>{
             setAllDoctors(response.data);
         })
    },[])

    function handleRemoveClick(){
        axios.delete(`http://127.0.0.1:6060/delete-doctor/${params.id}`)
        .then(()=>{
            alert('Task Deleted');
            toast.error('doctor has been removed', {
                  autoClose:4000,
                  style: {
                    font: 'bold', 
                  }
            });
            navigate("/doctor-list");         
        })
    }

    return(


        
        <div className="bg-blue-100 mt-20 px-14 py-10 shadow-md w-[550px] rounded-md mx-auto items-center">
           <div>
                <h3 className="font-bold mb-5 text-xl">Are your sure? Want to Remove Doctor?</h3>
                <dl  className="bg-white p-5 mt-5 rounded-md">
                    <div className="flex gap-5 mb-1">
                        <dt className="font-bold">Doctor Name :-</dt>
                        <dd>{alldoctors[0].DoctorName}</dd>
                    </div>
                    
                    <div className="flex gap-5 my-2">
                     <dt className="font-bold">Doctor Email :-</dt>
                     <dd>{alldoctors[0].DoctorEmail}</dd>
                    </div>
                    <div className="flex gap-5 my-2">
                     <dt className="font-bold">Specialist :-</dt>
                     <dd>{alldoctors[0].Speciality}</dd>
                    </div>
                    
                </dl>
                <div className="flex justify-between mt-5">
                <button onClick={handleRemoveClick} className="mt-4 w-28 font-bold py-1 rounded-md shadow-md bg-red-500">Yes</button>
                <Link to="/doctor-list" className="mt-4 w-28 font-bold py-1 text-center rounded-md shadow-md bg-orange-400">No</Link>

                </div>
                
            </div>

            <ToastContainer/>
        </div>
    )
}