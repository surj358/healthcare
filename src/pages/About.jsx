import axios from "axios";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Accordion, Info } from "../components/accordian";
import { Footer } from "../components/footer";

export function About() {

    // const [manifest, setManifest] = useState({icons:[{src:"", sizes:"", type:""}]});
    
    // function Loadproducts() {
    //     axios.get("manifest.json")
    //     .then((response)=> {
    //         setManifest(response.data);
    //     })
    //     .catch((response)=>{
    //         console.log(response);
    //     })
    // }

    // useEffect(()=>{
    //     Loadproducts();
    // })

    return (
        <div>
            {/* <div>
                { manifest.icons.map((item, index)=>(
                        <div>
                            <h1>{item.src}</h1>
                            <h2>{item.sizes}</h2>
                            <div>
                                <p>{item.type}</p>
                            </div>
                        </div>
                    ))}
            </div> */}

            <div className="text-center text-2xl pt-10 text-gray-500" >
                <p>ABOUT <span className="text-gray-700 font-medium">Us</span></p>
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-12 justify-center items-center ">
                <img className="w-[1000px] md:max-w-[360px]" src={assets.about_image} alt="" />
                <div className="flex flex-col justify-center text-justify gap-6 md:w-2/4 text-base text-gray-600">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, eos excepturi! Eaque, ad esse ratione fuga necessitatibus est enim rerum!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem, eius accusamus consequatur corporis nihil modi ea quibusdam quas harum.</p>
                    <b className="text-gray-800">Our Vision</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe non iusto veniam illo tempora doloremque? Nobis at eum reprehenderit amet!</p>
                </div>
            </div>

            <div className=" text-xl my-8 flex justify-center items-center">
                <p>WHY <span className="text-gray-700 font-semibold" >CHOOSE US</span></p>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2 mg:flex-row mb-20">
                <div className="border-2 px-10 rounded-md mg:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
                    <b>Efficiency:</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis incidunt voluptatem sapiente iure sequi ratione, aspernatur fuga nisi voluptas!</p>
                </div>
                <div className="border-2 rounded-lg px-10 mg:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
                    <b>Convenience:</b>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aut labore aspernatur perferendis praesentium error corrupti quaerat quos ullam neque!</p>
                </div>
                <div className="border-2 rounded-lg px-10 mg:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
                    <b>Personalization:</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tenetur optio quos quibusdam. Magni tempora recusandae rem in enim itaque.</p>
                </div>
            </div>

            <Info />
            <Footer />
        </div>
    )
}