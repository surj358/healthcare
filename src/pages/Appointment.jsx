import { useParams } from "react-router-dom"
import { doctors } from "../assets/assets"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export function Appointment() {

    const {docId} = useParams()
    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfo)
    }

   

    useEffect(() => {
        fetchDocInfo()
    },[doctors,docId])

    return docInfo && (

        <div>

            <div className="flex flex-col sm:flex-row gap-16 w-[1100px] mx-auto mt-10">
                <div>
                    <img src={docInfo.image} className="bg-primary w-full sm:max-w-72 rounded-full" alt="" />
                </div>

                <div className="flex-1 shadow-lg border bg-blue-50 border-gray-400 rounded-lg p-8  pt-12 mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ">
                    <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">{docInfo.name}
                        <img className="w-5" src="./verified_icon" alt="" />
                    </p>
                    <div className="my-5 flex gap-20">
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className="font-bold">{docInfo.experience}</button>
                    </div>

                    <div className="mt-5">
                        <p className="flex items-center gap-2 text-sm font-medium text-gray-900 mt-3 ">
                            About <img src='./assets/info_icon' alt="" />
                        </p>
                        <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
                    </div>

                    <p className="text-greay-500 font-medium mt-4">Appointment Fee :- <span className="text-gray-600" >$ {docInfo.fees}</span></p>
                    <Link className="bg-blue-600 px-5 py-2 relative top-14 mt-5 text-white font-bold rounded-md" to="/dashboard">Book Appointment</Link>
                </div>
            </div>
            
        </div>
    )
}