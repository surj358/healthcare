import { useParams } from "react-router-dom"
import { doctors } from "../assets/assets"
import { useEffect, useState } from "react"


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

            <div className="flex flex-col sm:flex-row gap-4">
                <div>
                    <img src={docInfo.image} className="bg-primary w-full sm:max-w-72 rounded-full" alt="" />
                </div>

                <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ">
                    <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">{docInfo.name}
                        <img className="w-5" src="./verified_icon" alt="" />
                    </p>
                    <div>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button>{docInfo.experience}</button>
                    </div>

                    <div>
                        <p className="flex items-center gap-2 text-sm font-medium text-gray-900 mt-3 ">
                            About <img src='./assets/info_icon' alt="" />
                        </p>
                        <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
                    </div>

                    <p className="text-greay-500 font-medium mt-4">Appointment Fee :- <span className="text-gray-600" >{docInfo.fee}</span></p>
                </div>
            </div>
            
        </div>
    )
}