 import { doctors } from "../assets/assets"

 export function MyAppointment() {


    return (

        <div className="px-40">
            <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">MY Appointment</p>
            <div>
                {doctors.slice(0,3). map((item, index) => (
                    <div className="grid grid-cols-2 gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
                        <div>
                            <img className="w-40 bg-indigo-50" src={item.image} alt="" />
                        </div>
                        <div className="flex-1 text-sm text-zinc-600">
                            <p className="text-neutral-800 font-semibold">{item.name}</p>
                            <p>{item.speciality}</p>
                            <p className="text-zinc-800 font-medium mt-1">address:</p>
                            <p className="text-xs">{item.address.line1}</p>
                            <p className="text-xs mt-1">{item.address.line1}</p>
                            <p><span>Date & Time:</span>25, July, 2025 / 8:30 PM</p>
                        </div>

                        <div></div>
                        <div className="flex flex-col gap-2 justify-end ">
                            <button  className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300 ">Pay Online</button>
                            <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300">Cancel Appointment</button>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    )
 }