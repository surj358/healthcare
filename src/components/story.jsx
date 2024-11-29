import PlayCircleOutLineIcon from '@mui/icons-material/PlayCircleOutline'

export function Story() {
    return (

        <div>
           
                <section id="our-story" className='bg-white my-20 lg:mx-32 sm:mx-0 border-8 shadow-2xl border-white grid lg:grid-cols-2'>
                    {/* <!--img--> */}
                    <div className="w-full flex relative">
                        <img className='lg:w-full flex object-cover object-center' src="./images/12.jpg" alt="" />
                        <a className=" absolute left-3 top-0 flex flex-col justify-center items-center bg-orange-700 py-5 px-2 rounded-lg text-white text-xs uppercase font-bold ">
                            <PlayCircleOutLineIcon sx={{fontSize:40, marginBottom:2}}/>
                            Play Video
                        </a>  
                    </div>
                    <div className="lg:p-12 sm:px-2">
                        <h2 className='text-blue-950 text-2xl font-bold my-5 sm:text-center lg:text-start'>Short Story About Our Hospital.</h2>
                        <p className=' my-3 mx-0 text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eum officiis. Praesentium 
                            blanditiis quasi, quaerat rem suscipit dignissimos perspiciatis sunt. Expedita qui perspiciatis sapiente sint nesciunt officiis, error delectus nihil?</p>

                        {/* <!--happy client number--> */}
                        <div className=" grid grid-cols-2 gap-5 mt-5">
                            {/* <!--box1--> */}
                            <div className="story-number-box bg-blue-200 p-5 flex flex-col justify-center items-center rounded-xl s-n-box1">
                                <strong className='font-bold text-4xl text-gray-800' >1000+</strong>
                                <span className='my-2'>Happy Patients</span>
                            </div>
                            {/* <!--box2--> */}
                            <div className="story-number-box bg-red-200  p-5 flex flex-col justify-center items-center rounded-xl s-n-box2">
                                <strong className='font-bold text-4xl text-gray-800' >215+</strong>
                                <span className='my-2'>Expert Doctors</span>
                            </div>
                            {/* <!--box3--> */}
                            <div className="story-number-box bg-pink-200 p-5 flex flex-col justify-center items-center rounded-xl s-n-box3">
                                <strong className='font-bold text-4xl text-gray-800' >310+</strong>
                                <span className='my-2'>Hospital Rooms</span>
                            </div>
                            {/* <!--box4--> */}
                            <div className="story-number-box bg-green-200 p-5 flex flex-col justify-center items-center rounded-xl s-n-box4">
                                <strong className='font-bold text-4xl text-gray-800' >106+</strong>
                                <span className='my-2'>Award Winning</span>
                            </div>
                        </div>    
                    </div>
                    </section> {/* <!--story end--> */}
        </div>
    )
}