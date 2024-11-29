import VaccinesIcon from '@mui/icons-material/Vaccines'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

export function Special() {

    return(
        <div>
                <div className=" my-14 grid lg:grid-cols-3 sm:grid-cols-1 justify-center text-center lg:mx-32 sm:mx-1">

                    {/* <!--box1*********************--> */}
                    <div className="flex justify-start items-center w-info-box1 my-3">

                        <div className="bg-pink-300 p-2 mr-4 rounded-lg justify-center text-center">
                            <VaccinesIcon  sx={{fontSize: 50,}}/>
                        </div>

                        <div className="flex flex-col text-start">
                            <strong>Specialised Services</strong>
                            <p>lorem ipsum dolor set</p>
                        </div>
                    </div>

                    {/* <!--box2*********************--> */}
                    <div className="flex justify-start items-center w-info-box2 my-2">

                        <div className="bg-purple-300 p-2 mr-4 rounded-lg justify-center text-center">
                        <SupportAgentIcon sx={{fontSize: 50,}} />
                        </div>

                        <div className="flex flex-col text-start">
                            <strong>24*7 Advance Care</strong>
                            <p>lorem ipsum dolor set</p>
                        </div>
                    </div>

                    {/* <!--box3*********************--> */}
                    <div className="flex justify-start items-center my-3">

                        <div className="bg-green-200 p-2 mr-4 rounded-lg text-center">
                        <MobileFriendlyIcon  sx={{fontSize: 50,}}/>
                        </div>

                        <div className="flex flex-col text-start">
                            <strong>Get Result Online</strong>
                            <p>lorem ipsum dolor set</p>
                        </div>
                    </div>

                </div> 


        </div>
    )
}