import { useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import { useNavigate } from 'react-router-dom';
import './specialist.css';

export function Specialist() {

    const [manifest, setManifest] = useState({doctors:[{name:"", span:"", image:""}]});

    let navigate = useNavigate()

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <section id="team">
        
                <div className="team-heading ">
                    <h3 className="font-bold">Meet Your Specialist</h3>
                    <p>loreum ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="team-box-container px-24">
                    {doctors.slice(0,8).map((item,index)=>(
                        <div style={{width:"250px"}} onClick={()=>navigate(`/appointment/${item._id}`)}>
                            <div className="team-box">
                                <div className="team-img">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                            
                            <div className="team-text">
                                <div className="flex items-center gap-2 text-sm text-center text-green-600">
                                <span className="relative flex h-3 w-3 ">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>
                                <p className="text-green-600 text-sm relative top-[-6px] ">Available</p>

                                </div>
                                
                                <strong>{item.name}</strong>
                                <span>{item.speciality}</span>
                            </div>
                        </div>
                    ))}

                </div>


            </section>

            <div id="subscribe">
                <h3>Subscribe for New Updates From Suraj Salve</h3>
                <form className="subscribe-box">
                    <input type="email" placeholder="suraj.salve3011@gmail.com"/>
                    <button>SubscribeS</button>
                </form>
            </div>    
            

        </div>
    )
}
