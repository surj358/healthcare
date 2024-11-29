import FavoriteIcon from '@mui/icons-material/Favorite'

export function Services() {

    return (
        <div>
            <section className='w-full bg-blue-50 mt-5 py-12 px-auto flex flex-col justify-center items-center' >
                    <div className="services-heading flex justify-between items-center lg:w-[1340px] ">
                        
                        <div>
                            <strong className='text-blue-700 text-xl font-bold'>Our Services</strong>
                            <h2 className='text-3xl text-gray-800 font-semibold mt-2'>High Quality Services For You</h2>
                        </div>

                    </div>

                    {/* <!--our servicess***************************--> */}
                    <div className="my-10 mx-10 grid lg:grid-cols-5 sm:grid-cols-1">       
                            
                            {/* <!--slide1-->  */}
                            
                                    <div className="services-box flex flex-col items-start border-4 border-white p-7 bg-blue-300">
                                        {/* <!--icon--> */}
                                        <i className='p-2 rounded-md flex justify-center bg-blue-50 items-center mb-5'>< FavoriteIcon sx={{fontSize: 40}}/></i>
                                        {/* <!--title--> */}
                                        <strong className='text-gray-900 text-base' >Heart Care</strong>
                                        {/* <!--details--> */}
                                        <p className='text-base'>lorem,ipsum dolor sit amet consectetur</p>
                                        {/* <!--btn--> */}
                                        <button className='h-11 bg-slate-800 text-white px-5 font-semibold rounded-lg mt-5'>Read More</button>
                                    </div>

                                    <div className="services-box flex flex-col items-start border-4 border-white p-7 bg-pink-300">
                                        {/* <!--icon--> */}
                                        <i className='p-2 rounded-md flex bg-blue-50 justify-center items-center mb-5'>< FavoriteIcon sx={{fontSize: 40}}/></i>
                                        {/* <!--title--> */}
                                        <strong className='text-gray-900 text-base' >Dental Care</strong>
                                        {/* <!--details--> */}
                                        <p className='text-base'>lorem,ipsum dolor sit amet consectetur</p>
                                        {/* <!--btn--> */}
                                        <button className='h-11 bg-slate-800 text-white px-5 font-semibold rounded-lg mt-5'>Read More</button>
                                    </div>

                                    <div className="services-box flex flex-col items-start border-4 border-white p-7 bg-purple-400">
                                        {/* <!--icon--> */}
                                        <i className='p-2 rounded-md bg-blue-50 flex justify-center items-center mb-5'>< FavoriteIcon sx={{fontSize: 40}}/></i>
                                        {/* <!--title--> */}
                                        <strong className='text-gray-900 text-base' >Brain Care</strong>
                                        {/* <!--details--> */}
                                        <p className='text-base'>lorem,ipsum dolor sit amet consectetur</p>
                                        {/* <!--btn--> */}
                                        <button className='h-11 bg-slate-800 text-white px-5 font-semibold rounded-lg mt-5'>Read More</button>
                                    </div>

                                    <div className="services-box flex flex-col items-start border-4 border-white p-7 bg-orange-300">
                                        {/* <!--icon--> */}
                                        <i className='p-2 rounded-md bg-blue-50 flex justify-center items-center mb-5'>< FavoriteIcon sx={{fontSize: 40}}/></i>
                                        {/* <!--title--> */}
                                        <strong className='text-gray-900 text-base' >Eye Care</strong>
                                        {/* <!--details--> */}
                                        <p className='text-base'>lorem,ipsum dolor sit amet consectetur</p>
                                        {/* <!--btn--> */}
                                        <button className='h-11 bg-slate-800 text-white px-5 font-semibold rounded-lg mt-5'>Read More</button>
                                    </div>

                                    <div className="services-box flex flex-col items-start border-4 border-white p-7 bg-yellow-300">
                                        {/* <!--icon--> */}
                                        <i className='p-2 rounded-md bg-blue-50 flex justify-center items-center mb-5'>< FavoriteIcon sx={{fontSize: 40}}/></i>
                                        {/* <!--title--> */}
                                        <strong className='text-gray-900 text-base' >Lungs Care</strong>
                                        {/* <!--details--> */}
                                        <p className='text-base'>lorem,ipsum dolor sit amet consectetur</p>
                                        {/* <!--btn--> */}
                                        <button className='h-11 bg-slate-800 text-white px-5 font-semibold rounded-lg mt-5'>Read More</button>
                                    </div>                              
                                            
                        
                    </div>

                <span className="text-base mt-7 text-center px-2">Contact us For Need Any Help and Services <a className='text-blue-600 underline font-bold cursor-pointer'>Let's Get Started</a></span>


            </section>

        </div>
    );
}