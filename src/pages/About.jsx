import axios from "axios";
import { useEffect, useState } from "react";

export function About() {

    const [manifest, setManifest] = useState({icons:[{src:"", sizes:"", type:""}]});
    
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
        <div>
            <h1>Welcome to about section</h1>
            <div>
                {manifest.icons.map((item, index)=>(
                        <div>
                            <h1>{item.src}</h1>
                            <h2>{item.sizes}</h2>
                            <div>
                                <p>{item.type}</p>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}