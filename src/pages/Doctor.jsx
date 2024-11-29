import { useNavigate, useParams } from "react-router-dom";
import { doctors } from '../assets/assets';
import { useEffect, useState } from "react";

export function Doctor(){

    const { speciality } = useParams() 

    const [filterDoc,setFilterDoc] = useState([])  

    let navigate = useNavigate();  

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        } else {
            setFilterDoc(doctors)
        }
    }

    useEffect(()=> {
        applyFilter()
    },[doctors, speciality])



    return (
        <div>
            <div className=" flex justify-center text-center mx-auto">
                <div className="col-span-2 relative top-20">
                    <p onClick={()=> speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border my-4 border-gray-300 rounded transition-all cursor-pointer`}>General Physician</p>
                    <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border my-4 border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
                    <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border my-4 border-gray-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
                    <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border my-4 border-gray-300 rounded transition-all cursor-pointer`}>Pediatricians</p>
                    <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border my-4 border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
                    <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 my-4 border border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
                </div>
                <div className="grid grid-cols-4 gap-4 m-10">
                    {
                      filterDoc.map((item,index)=>(
                        <div style={{width:"250px"}} onClick={()=>navigate(`/appointment/${item._id}`)}>
                            <div className="team-box">
                                <div className="team-img">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                            
                            <div className="team-text">
                                <div className="flex items-center gap-2 text-sm text-center text-green-600">
                                <p className="text-green-600 text-sm relative top-[-6px] ">Available</p>

                                </div>
                                
                                <strong>{item.name}</strong>
                                <span>{item.speciality}</span>
                            </div>
                        </div>
                    ))  
                    }
                </div>
            </div>



        </div>
    )
}