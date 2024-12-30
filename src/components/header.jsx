import './header.css';
import CheckIcon from '@mui/icons-material/Check';
import SearchIcon from '@mui/icons-material/Search'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Link } from 'react-router-dom';

export function Header() {
    return (

    <div>

        <div className='pt-14 lg:px-20 bg-blue-50 sm:px-5'>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="flex flex-col mt-8">
                    <h1 className='text-4xl font-bold'>Feel Better About Finding Healthcare</h1>
                    <p className='my-10 tracking-wide leading-8 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt repellat exercitationem est facilis eos sapiente illo quo at nam vitae doloremque architecto, deserunt dolorum minima a impedit officia ratione?</p>
                    <div className="flex items-center justify-start ">
                        <Link to={'/doctor'}><a className='h-11 p-4 bg-blue-950 text-white items-center flex justify-center font-bold lg:text-base rounded-md tracking-wide mr-3 '>
                            <SearchIcon className='w-4 h-4 p-1 rounded-full bg-blue-600 mr-2 size-2' />
                            Find a Doctor</a></Link>         
                        
                        <Link to={'/dashboard'}><a className='h-11 p-4 bg-blue-950 text-white items-center  flex justify-center font-bold lg:text-base rounded-md tracking-wide mr-3 '>
                            <CheckIcon className='w-4 h-4 p-1 rounded-full bg-blue-600 mr-2 size-2 "' /> Book Appointment </a></Link>
                    </div>
                </div>

                <div className="hero-img">
                    <img style={{}} src="123.png" alt="" />
                </div>
            </div>

        </div>
        <div className="bg-white p-5 m-auto rounded-lg shadow-2xl relative z-10 mt-[-42px] lg:w-[1000px] ">
                <h3 className='text-base mb-2 font-bold'>Find Best Healthcare</h3> 

                <div className="grid lg:grid-cols-12 gap-2 ">

                    <div className=" flex justify-start items-center col-span-6 p-3 rounded-md border bg-blue-50">
                        <SearchIcon/>
                        <dd><input className='mx-4 bg-blue-50' type="text" placeholder="search your Doctor here"/></dd>                      
                    </div>

                    <div className=" flex justify-start col-span-5 items-center p-3 rounded-md border bg-blue-50">
                        <LocationOnIcon />
                        <dd><input className='mx-4 bg-blue-50' type="text" placeholder="Aurangabad"/></dd>       
                    </div>

                    <button className='bg-blue-600 rounded-md cursor-pointer w-14'>
                        <SearchIcon className='text-white' />
                    </button>

                </div>

            </div>
    </div>
    )
}