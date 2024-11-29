import { useState } from "react"
import { assets } from "../assets/assets"
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';


export function Myprofile() {

    const [userData, setUserData] = useState({
        name:"Suraj Salve",
        image:assets.profile_pic,
        email:'suraj.salve3011@gmail.com',
        phone:'9960907232',
        address:{
            line1:"Kohinoor Park Tisgaon Aurangabad",
            line2:"Aurangabad"
        },
        gender:'Male',
        dob:'30-04-2001'
    })

    const [isEdit, setIsEdit] = useState(false)


    return (
        <div className="flex justify-center gap-10 items-center mt-16">
            <div className="text-center mr-32">
                <img className="rounded-full" src={userData.image} alt="" />

                {
                    isEdit ? <input className="font-medium text-3xl text-neutral-800 max-w-60 mt-4 text-center bg-gray-200 rounded-lg p-1" type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))} />              
                    : <p className="font-medium text-3xl text-neutral-800 max-w-60 mt-4 bg-blue-100 rounded-lg p-1">{userData.name}</p>

                }
                <hr />
            </div>

                    <div className=" w-[650px]">

                        <div>
                            <p className="text-black underline mt-3 text-3xl font-bold mb-5">Contact Information</p>

                            <div className="grid grid-cols-2">
                                <p className="font-bold mb-2">Email Id</p>
                                <p className="text-blue-600 mb-2">{userData.email}</p>
                                <p className="font-bold mb-2">Phone :</p>
                                {
                                    isEdit ? <input className="bg-gray-100 max-w-52" type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))} />              
                                    : <p className="text-blue-600">{userData.phone}</p>
                                }
                                <p className="font-bold">Address</p>
                                {
                                    isEdit ? <p>
                                        <input className="gd-gray-100" type="text" value={userData.address.line1} onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line1: e.target.value }}))} />
                                        <br />
                                        <input className="gd-gray-100" type="text" value={userData.address.line2} onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line2: e.target.value }}))} />
                                    </p>              
                                    :   <p className="text-gray-500"> 
                                        <p>line1: {userData.address.line1}</p>
                                        <p> line2: {userData.address.line2}</p>

                                        </p>
                                }
                            </div>
                        </div>

                        <div>
                            <p className="text-black underline mt-3 text-1xl font-bold my-5" >BASIC INFORMATION</p>
                            <div className="grid grid-cols-2">
                                <p className="font-bold">Gender :</p>
                                {
                                    isEdit ? <select className="max-w-40 bg-gray-100" onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        </select>             
                                    : <p className="text-gray-400">{userData.gender}</p>
                                }

                                <p className="font-bold">Birthday</p>
                                {
                                    isEdit 
                                    ? <input className="max-w-40 bg-gray-100" type="date" onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob} />
                                    : <p className="text-gray-400">{userData.dob}</p>
                                }
                            </div>
                        </div>

                        <div className="mt-10 text-end ">
                            {
                                isEdit
                                ? <Button variant="contained" color="success" onClick={() => setIsEdit(false)} sx={{textTransform: 'capitalize', hover:'background-white', marginRight:"154px"}} startIcon={<SaveIcon/>}>Save Information</Button>
                                : <Button variant="contained" onClick={() => setIsEdit(true)} sx={{textTransform: 'capitalize', backgroundColor:"darkblue", marginRight:"200px"}} startIcon={<EditIcon/>}>Edit Profile</Button>
                            }
                        </div>
                    </div>    
            
        </div> 
    )
}