import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {

    let navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(false)


    return (
        <div >
            <div className="flex items-center justify-between text-sm py-4 border-b border-b-grey ">
                <h1 className="">Suraj Salve 358</h1>

                <ul className="hidden md:flex item-start gap-5 font-medium">
                    <Link to="/" >
                      <li className="py-1 hover:text-primary active:text-primary">Home</li>
                      <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                    </Link>

                    <Link to="/doctor">
                      <li  className="py-1 hover:text-primary active:text-primary">All Doctors </li>
                      <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
                    </Link>

                    <Link to="/about">
                        <li  className="py-1 hover:text-primary active:text-primary">About</li>
                        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                    </Link>    

                    <Link to="/contact">
                        <li  className="py-1 hover:text-primary active:text-primary">Contact</li>
                        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                    </Link>    
        
                </ul>
                <div onClick={()=>{
                    navigate("/login")
                    setToken(true)}}>
                {
                   token
                    ? ( <div>
                         <h1>demo check</h1>
                        </div> )
                    : (<button className="bg-primary text-white px-6 py-2 rounded-full font-medium  md-block hidden md:block">Create Account</button>)  

                }
                </div>
            
            </div> 

        </div>
    )
}