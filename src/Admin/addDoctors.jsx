import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export function AddDoctors() {

    const [cookies, setCookie, removeCookie] = useCookies('username');


    return(

        <div className="grid grid-cols-12 relative top-[150px]">

                <div className="col-span-2 h-[800px]">
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Dashboard</h1>
                    <Link to={'/admin-dashboard'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Appointments</h1></Link>
                    <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Add Doctors</h1>
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Doctors List</h1>
                </div>

        
            <div className="relative -top-36 bg-blue-50 p-20 col-span-10">
                <div className="flex justify-between p-5">
                    <h1 className="text-2xl top-[2px] relative">Add Doctors</h1>
                    <span className="flex mx-auto text-center">
                          <h1 className="text-3xl font-semibold uppercase">{cookies['username']}</h1>
                    </span>
                    <div>
                        <button className="bg-red-600 text-white font-semibold px-5 py-2 rounded-md shadow-md shadow-slate-600 hover:scale-105 duration-300">Signout</button>
                    </div>
                </div>

                    <div className="rounded-md p-8 shadow-2xl bg-white mt-20">
                        

                    </div>
                
            </div>

            <div>
                
            </div>

        </div> 
    )
}