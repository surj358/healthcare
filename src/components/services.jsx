import './services.css';

export function Services() {

    return (
        <div>
            <section id="our-services" >
                    <div class="services-heading">
                        
                        <div class="services-heading-text">
                            <strong>Our Services</strong>
                            <h2>High Quality Services For You</h2>
                        </div>

                        <div class="services-slide-btns">
                
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>

                    {/* <!--our servicess***************************--> */}
                    <div class="services-box-container">


                        {/* <!-- Swiper --> */}
                        <div class="swiper mySwiperservices">
                            <div class="swiper-wrapper">
                            {/* <!--slide1-->  */}
                            <div class="swiper-slide">
                                    <div class="services-box s-box1">
                                        {/* <!--icon--> */}
                                        <i class="fa-solid fa-heart-pulse"></i>
                                        {/* <!--title--> */}
                                        <strong>Heart Care</strong>
                                        {/* <!--details--> */}
                                        <p>lorem,ipsum dolor sit amet consectetur</p>
                                        {/* <!--btn--> */}
                                        <a href="#">Read More</a>
                                    </div>
                            </div>

                            {/* <!--slide2-->  */}
                            <div class="swiper-slide">
                                <div class="services-box s-box2">
                                    {/* <!--icon--> */}
                                    <i class="fa-solid fa-tooth"></i>
                                    {/* <!--title--> */}
                                    <strong>Dental Care</strong>
                                    {/* <!--details--> */}
                                    <p>lorem,ipsum dolor sit amet consectetur</p>
                                    {/* <!--btn--> */}
                                    <a href="#">Read More</a>
                                </div>
                                </div>

                                {/* <!--slide3-->  */}
                            <div class="swiper-slide">
                                <div class="services-box s-box3">
                                    {/* <!--icon--> */}
                                    <i class="fa-solid fa-brain"></i>
                                    {/* <!--title--> */}
                                    <strong>Brain Care</strong>
                                    {/* <!--details--> */}
                                    <p>lorem,ipsum dolor sit amet consectetur</p>
                                    {/* <!--btn--> */}
                                    <a href="#">Read More</a>
                                </div>
                                </div>

                                {/* <!--slide4-->  */}
                            <div class="swiper-slide">
                                <div class="services-box s-box4">
                                    {/* <!--icon--> */}
                                    <i class="fa-solid fa-eye"></i>
                                    {/* <!--title--> */}
                                    <strong>EYE Care</strong>
                                    {/* <!--details--> */}
                                    <p>lorem,ipsum dolor sit amet consectetur</p>
                                    {/* <!--btn--> */}
                                    <a href="#">Read More</a>
                                </div>
                                </div>

                                {/* <!--slide5-->  */}
                            <div class="swiper-slide">
                                <div class="services-box s-box5">
                                    {/* <!--icon--> */}
                                    <i class="fa-solid fa-lungs"></i>
                                    {/* <!--title--> */}
                                    <strong>Lungs Care</strong>
                                    {/* <!--details--> */}
                                    <p>lorem,ipsum dolor sit amet consectetur</p>
                                    {/* <!--btn--> */}
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                                {/*<!--slider end-->      */}
                                            
                            </div> 
                        </div>
                        
                    </div>

                <span class="services-help-btn">Contact us For Need Any Help and Services <a href="#">Let's Get Started</a></span>


            </section>

        </div>
    );
}