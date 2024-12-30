import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function AddDoctors() {

    const [cookies, setCookie, removeCookie] = useCookies('userid');

    let navigate = useNavigate();

    function handleSignout(){
        removeCookie('userid');
        navigate('/admin-login');
        toast.error('Admin Has Been LogOut',{
            autoClose:3000
        })
    }

    const formik = useFormik({
        initialValues: {

            DoctorName:'',
            DoctorEmail:'',
            Password:'',
            Experience:'',
            Fees:'',
            Speciality:'',
            Education: '',
            Address_1:'',
            Address_2:'',
            file: null

        },
        onSubmit: (doctor) => {
            axios.post(`http://127.0.0.1:6060/add-doctors`, doctor);
            toast.success('Doctor has been Added',{
                autoClose:3000
            });
            alert('Doctor Added Successfully..');
            navigate('/admin-dashboard');
        }
    })


    return(

        <div className="grid grid-cols-12 relative top-[150px]">

                <div className="col-span-2 h-[800px]">
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Dashboard</h1>
                    <Link to={'/admin-dashboard'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Appointments</h1></Link>
                    <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Add Doctors</h1>
                    <Link to={'/doctor-list'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Doctors List</h1></Link>
                </div>

        
            <div className="relative -top-36 bg-blue-50 pt-10 p-20 col-span-10">
                <div className="flex justify-between items-center p-5">
                    <span className="flex text-center gap-3">
                          <h1 className="text-2xl relative">- Welcome to the</h1>
                          <h1 className="text-2xl font-semibold -me-6 uppercase">{cookies['userid']}</h1>
                    </span>
                    <div>
                        <button onClick={handleSignout} className="bg-red-600 text-white font-semibold px-5 py-2 rounded-md shadow-md shadow-slate-600 hover:scale-105 duration-300">Signout</button>
                    </div>
                </div>

                <div className="rounded-md p-8 shadow-2xl bg-white mt-10">

                        <div>
                            <h1>Upload File</h1>
                        </div>

                        <form onSubmit={formik.handleSubmit}>

                            <div className="grid grid-cols-2 gap-5 px-7">
                                {/* =======left side div form div----------------- */}

                                <div className="flex flex-col mt-10">
                                    <label className="my-2 font-semibold"> Doctor Name</label>
                                    <input type="text" placeholder="Name" name="DoctorName" required onChange={formik.handleChange}  className="h-10 border-2 px-3 mb-3 bg-blue-50"/>
                                    
                                    <label className="my-2 font-semibold"> Doctor Email</label>
                                    <input type="Email" placeholder="Email" name="DoctorEmail" required onChange={formik.handleChange}  className="h-10 border-2 px-3 mb-3 bg-blue-50"/>
                                    
                                    <label className="my-2 font-semibold"> Doctor Password</label>
                                    <input type="password" placeholder="Doctor Password" name="Password" required onChange={formik.handleChange}  className="h-10 border-2 px-3 mb-3 bg-blue-50"/>
                                    
                                    <label className="my-2 font-semibold"> Experience</label>
                                    <select className="h-10 border-2 px-3 mb-3 bg-blue-50" name="Experience" required onChange={formik.handleChange}> 
                                        <option value="" disabled>Select Experience</option>
                                        <option value="2 years">2 years</option>
                                        <option value="3 years">3 years</option>
                                        <option value="4 years">4 years</option>
                                        <option value="5 years">5 years</option>
                                        <option value="6 years">6 years</option>
                                        <option value="7 years">7 years</option>
                                        <option value="8 years">8 years</option>
                                        <option value="9 years">9 years</option>


                                    </select>
                                    <label className="my-2 font-semibold" > Fees</label>
                                    <input type="text" placeholder="Fees" name="Fees" required onChange={formik.handleChange} className="h-10 border-2 px-3 mb-3 bg-blue-50"/>
                                    
                                    
                                </div>
                                
                                {/* =======Right side div form div----------------- */}

                                <div className="flex flex-col mt-10">
                                    <label className="my-2 font-semibold"> Speciality</label>
                                    <select className="h-10 border-2 px-3 mb-3 bg-blue-50" required name="Speciality" onChange={formik.handleChange}> 
                                        <option value="" disabled>Select Speciality</option>
                                        <option value="MBBS">MBBS</option>
                                        <option value="BDS">BDAS</option>
                                        <option value="BHAMS">BHMS</option>
                                        <option value="BAMS">BAMS</option>
                                    </select>                                
                                    <label className="my-2 font-semibold">Education</label>
                                    <input type="text" placeholder="Education" name="Education" required onChange={formik.handleChange}  className="h-10 border-2 px-3 mb-3 bg-blue-50"/>
                                    
                                    <label className="my-2 font-semibold"> Address</label>
                                    <input type="text" placeholder="Address 1" name="Address_1" required onChange={formik.handleChange}  className="h-10 border-2 px-3 mb-3 bg-blue-50"/>
                                    <input type="text" placeholder="Address 2" name="Address_2" onChange={formik.handleChange}  className="h-10 border-2 px-3 mb-3 bg-blue-50"/>

                                    <label className="my-2 font-semibold">Upload</label>
                                    <input type="file" placeholder="Upload file" name="file" required onChange={formik.handleChange} className="h-10 border-2 px-3 mb-3 bg-blue-50" />
                                    
                                </div>
                                <div>
                                    <button className="bg-blue-600 shadow-md shadow-blue-400 text-white rounded-md px-5 py-2">Add Doctor</button>
                                </div> 
                            
                            </div>
                        </form>       
   
                        

                </div>
                
            </div>

            <div>
                
            </div>
            <ToastContainer />

        </div> 
    )
}