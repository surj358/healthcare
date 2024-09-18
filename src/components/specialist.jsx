import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './specialist.css';

export function Specialist() {

    const [manifest, setManifest] = useState({doctors:[{name:"", span:"", image:""}]});

    const navigate = useNavigate()
    
    function Loadproducts() {
        axios.get("manifest.json")
        .then((response)=> {
            setManifest(response.data);
        })
        .catch((response)=>{
            console.log(response);
        })
    }

    useEffect(()=>{
        Loadproducts();
    })

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <section id="team">
        
                <div class="team-heading ">
                    <h3 className="font-bold">Meet Your Specialist</h3>
                    <p>loreum ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div class="team-box-container">
                      {manifest.doctors.map((item, index)=>(
                        <div style={{width:"250px"}} onClick={()=>navigate(`/appointment/${item._id}`)}>
                            <div class="team-box">
                                <div class="team-img">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                            
                            <div class="team-text">
                                <div className="flex items-center gap-2 text-sm text-center text-green-600">
                                 <p className="w-2 h-2 bg-green-600 rounded-full"></p><p className="text-green-600 text-sm">Available</p>
                                </div>
                                <span class="relative flex h-3 w-3">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>
                                <strong>{item.name}</strong>
                                <span>{item.span}</span>
                            </div>
                        </div>
                    ))}

                </div>

                <button className="bg-blue-400 text-grey-600 px-10 py-2 rounded-full mt-10 align-item-center">More</button>


            </section>

            <div id="subscribe">
                <h3>Subscribe for New Updates From Suraj Salve</h3>
                <form class="subscribe-box">
                    <input type="email" placeholder="suraj.salve3011@gmail.com"/>
                    <button>SubscribeS</button>
                </form>
            </div>    
            

        </div>
    )
}
