import './header.css'

export function Header() {
    return (

        <div className='pt-8'>
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Feel Better About Finding HealtCare</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt repellat exercitationem est facilis eos sapiente illo quo at nam vitae doloremque architecto, deserunt dolorum minima a impedit officia ratione?</p>
                    <div className="hero-text-btns">
                        <a href="#">
                            <i className="fa-solid fa-magnifying-glass">icon</i>
                            Find a Doctor</a>
                        <a href="#">
                            <i className="fa-solid fa-check">icon</i>
                            Book Appointment
                        </a>
                    </div>
                </div>

                <div className="hero-img">
                    <img src="./123.png" alt="" />
                </div>
            </div>

            <div className="appointment-search-container">
                <h3>Find Best Healthcare</h3> 

                <div className="appointment-search">

                    <div className="appo-search-box i">
                        <i className="fa-solid fa-magnifying-glass">icon</i>
                        <dd><input type="text" placeholder="search your Doctor here"/></dd>                      
                    </div>

                    <div className="appo-search-box">
                        <i className="fa-solid fa-map-pin">icon</i>
                        <dd><input type="text" placeholder="Suraj-Salve-358"/></dd>       
                    </div>

                    <button>
                        <i className="fa-solid fa-magnifying-glass">icon</i>
                    </button>

                </div>

            </div>

        </div>
    )
}