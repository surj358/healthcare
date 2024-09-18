import './story.css';

export function Story() {
    return (

        <div>
           
                <section id="our-story">
                    {/* <!--img--> */}
                    <div class="our-story-img">
                        <img src="./images/12.jpg" alt="" />
                        <a href="#" class="story-play-btn">
                            <i class="fa-solid fa-play"></i>
                            Play Video
                        </a>  
                    </div>
                    <div class="our-story-text">
                        <h2>Short Story About Our Hospital.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eum officiis. Praesentium 
                            blanditiis quasi, quaerat rem suscipit dignissimos perspiciatis sunt. Expedita qui perspiciatis sapiente sint nesciunt officiis, error delectus nihil?</p>

                        {/* <!--happy client number--> */}
                        <div class="story-number-container">
                            {/* <!--box1--> */}
                            <div class="story-number-box s-n-box1">
                                <strong>1000+</strong>
                                <span>Happy Patients</span>
                            </div>
                            {/* <!--box2--> */}
                            <div class="story-number-box s-n-box2">
                                <strong>215+</strong>
                                <span>Expert Doctors</span>
                            </div>
                            {/* <!--box3--> */}
                            <div class="story-number-box s-n-box3">
                                <strong>310+</strong>
                                <span>Hospital Rooms</span>
                            </div>
                            {/* <!--box4--> */}
                            <div class="story-number-box s-n-box4">
                                <strong>106+</strong>
                                <span>Award Winning</span>
                            </div>
                        </div>    
                    </div>
                    </section> {/* <!--story end--> */}
        </div>
    )
}