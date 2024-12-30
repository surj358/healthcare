import './footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export function Footer() {
    return(
        <div >
            <footer className='bg-gray-100'>
                    <div className="footer-container py-12 px-10 m-auto flex justify-between items-start">
                        {/* <!--company box=====--> */}
                        <div className="footer-company-box lg:w-[330px]">
                            {/* <!--logo====--> */}
                            <a href="#" className="drop-shadow-xl shadow-blue-600 font-bold "><span className='text-blue-600'>Suraj </span>Salve 358</a>
                            {/* <!--details--> */}
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic non sit libero voluptates deserunt nihil qui, veritatis veniam tempora nequ</p>
                            {/* <!--social box=====--> */}
                            <div className="footer-social">
                                <a href="#"><i><InstagramIcon /></i></a>
                                <a href="#"><i><TwitterIcon /></i></a>
                                <a href="#"><i><EmailIcon /></i></a>
                                <a href="#"><i><WhatsAppIcon /></i></a>
                                
                            </div>
                        </div>
                        {/* <!--company-box-end=======--> */}

                        {/* <!--link=====--> */}
                        <div className="footer-link-box lg:flex flex-col sm:hidden ">
                            <strong>Main Links's</strong>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Portfolio</a></li>
                            </ul>
                        </div>

                        {/* <!--link=====--> */}
                        <div className="footer-link-box lg:flex flex-col sm:hidden ">
                            <strong>Main Links's</strong>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Portfolio</a></li>
                            </ul>
                        </div>

                        {/* <!--link=====--> */}
                        <div className="footer-link-box">
                            <strong>Main Links's</strong>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Portfolio</a></li>
                            </ul>
                        </div>
                        
                    </div>      



                    {/* <!--bottom======--> */}
                    <div className="footer-bottom">
                        <span>Made By  Suraj Salve 358</span>
                        <span>Copyright 2024 - Suraj Sudhakar Salve
                        Aurangabd-431136, Maharashtra </span>
                    </div>
            </footer>

        </div>
    )
}