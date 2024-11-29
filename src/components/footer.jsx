import './footer.css';

export function Footer() {
    return(
        <div >
            <footer className='bg-gray-100'>
                    <div className="footer-container py-12 px-10 m-auto flex justify-between items-start">
                        {/* <!--company box=====--> */}
                        <div className="footer-company-box lg:w-[330px]">
                            {/* <!--logo====--> */}
                            <a href="#" className="logo"><span>Suraj</span>Salve 358</a>
                            {/* <!--details--> */}
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic non sit libero voluptates deserunt nihil qui, veritatis veniam tempora nequ</p>
                            {/* <!--social box=====--> */}
                            <div className="footer-social">
                                <a href="#"><i className="fa-brands fa-instagram">O</i></a>
                                <a href="#"><i className="fa-brands fa-twitter">O</i></a>
                                <a href="#"><i className="fa-brands fa-linkedin">O</i></a>
                                <a href="#"><i className="fa-brands fa-whatsapp">O</i></a>
                                
                            </div>
                        </div>
                        {/* <!--company-box-end=======--> */}

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
                        <div className="footer-link-box ">
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
                        <span>Copyright 2023 - Suraj Sudhakar Salve
                        Aurangabd Maharashtra </span>
                    </div>
            </footer>

        </div>
    )
}