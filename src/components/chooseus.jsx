import './chooseus.css';
import { Link } from 'react-router-dom';
import AddTaskIcon from '@mui/icons-material/AddTask';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export function ChooseUs() {
    return (
        <div>
            <section className='grid lg:grid-cols-2 sm:grid-cols-1'>

                {/* <!--left********--> */}
                <div className=" p-12 bg-green-800">
                    <h3 className='text-4xl font-bold text-white'>Why Choose Us</h3>

                    {/* <!------container--> */}
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-5 gap-2'>
                        {/* <!--box--> */}
                        <div className="why-choose-box align-center p-5 bg-green-600">
                            <i><AddTaskIcon/></i>
                            {/* <!-- text --> */}
                            <div className="why-choose-box-text">
                                <strong>Advance Care</strong>
                                <p>Lorem ipsum olor sit</p>
                            </div>
                        </div>

                        {/* <!--box--> */}
                        <div className="why-choose-box flex justify-start items-center p-5 bg-green-200">
                            <i><AddTaskIcon/></i>
                            {/* <!-- text --> */}
                            <div className="why-choose-box-text">
                                <strong>Advance Care</strong>
                                <p>Lorem ipsum olor sit</p>
                            </div>
                        </div>

                        {/* <!--box--> */}
                        <div className="why-choose-box">
                            <i><AddTaskIcon/></i>
                        {/* <!-- text --> */}
                            <div className="why-choose-box-text">
                                <strong>Advance Care</strong>
                                <p>Lorem ipsum olor sit</p>
                            </div>
                        </div>

                        {/* <!--box--> */}
                        <div className="why-choose-box">
                            <i><AddTaskIcon/></i>
                        {/* <!-- text --> */}
                            <div className="why-choose-box-text">
                                <strong>Advance Care</strong>
                                <p>Lorem ipsum olor sit</p>
                            </div>
                        </div>

                    </div>
                    {/* <!--btn--> */}
                    <Link to='/dashboard'><a className="why-choose-us-btn"> Make Appointment</a></Link>

                </div> {/*  <!--left end--> */}

                {/* <!--right********--> */}
                <div className="why-choose-us-right p-12 bg-indigo-700">
                    <h3>Emergency? <hr/>
                        Contact Us
                    </h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime similique sequi consectetur sint error quidem corrupti, saepe mollitia, eaque, blanditiis dolor laudantium et repudiandae dolores tempore porro quasi tempora neque!</p>
                    {/* <!--container=====--> */}
                    <div className="w-right-contact-container">

                        {/* <!-- box====--> */}
                        <div className="w-right-contact-box">
                            {/* <!--icon===--> */}
                            <i><CallIcon/></i>
                            {/* <!--text===--> */}
                            <div className="w-right-contact-box-text">
                                <span>Call Us Now</span>
                                <strong>91+ 9960907232</strong>
                            </div>
                        </div>

                        
                        {/* <!-- box====--> */}
                        <div className="w-right-contact-box">
                            {/* <!--icon===--> */}
                            <i><EmailIcon/></i>
                            {/* <!--text===--> */}
                            <div className="w-right-contact-box-text">
                                <span>Mail Us</span>
                                <strong>suraj.salve3011@gmail.com</strong>
                            </div>
                        </div>

                    </div>
                </div>


            </section>

        </div>
    )
}