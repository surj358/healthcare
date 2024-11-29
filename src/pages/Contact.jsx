import * as React from 'react';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Footer } from '../components/footer';
import { Info } from '../components/accordian';

export function Contact() {

    const {register, handleSubmit, formState:{errors}} = useForm();
    
    

    const submit = (values)=> {
        console.log(values);
    }

    return (

        <div>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-between mx-auto my-24 items-center lg:w-[900px]">
                <div className="w-96">
                 <img src="doctor-anim.png" alt="" />
                </div>
                <div className="lg:w-[400px] sm:w-[300px] border-t-8 border-blue-700 shadow-xl shadow-blue-200 lg:px-5 pt-4 pb-11 flex flex-col justify-center items-center">
                    <h2 className="text-2xl flex justify-center items-center font-medium my-5">Contact us</h2>

                    <form onSubmit={handleSubmit(submit)}>                                


                        <dd className='m-4'><TextField className='w-[300px]' id="standard-basic" label="Name" variant="standard" {...register("Name", {required:true, minLength:4})} name="Name"  /></dd>
                        <dd className="text-red-700 text-start ml-4 mb-6 mt-[-10px] ">
                        {(errors.Name?.type==="required")?<span>Name Required</span>:<span></span> && (errors.Name?.type==="minLength"?<span>Name too short</span>:<span></span>) }
                        </dd>
                        <dd className='m-4'><TextField className='w-[300px]' id="standard-basic" label="E-Mail" variant="standard" {...register("EMail", {required:true})} name="EMail" /></dd>
                        <dd className="text-red-700 text-start ml-4 mb-6 mt-[-10px]">
                        {(errors.EMail?.type==="required")?<span>E-Mail Required</span>:<span></span> }
                        </dd>
                        <dd className='m-4'><TextField className='w-[300px]' id="standard-basic" label="Mobile No." variant="standard" {...register("Mobile", {required:true, pattern:/\+91\d{10}/})} name="Mobile"  /></dd>
                        <dd className="text-red-700 text-start ml-4 mb-6 mt-[-10px]">
                        {errors.Mobile?.type==="required"?<span>Mobile Required</span>:<span></span> && (errors.Mobile?.type==="pattern"?<span>Number should start from +91</span>:<span></span>)}</dd>
                        <dd className='m-4'><TextField className='w-[300px]' id="standard-basic" label="Message" variant="standard" {...register("Message", {required:true})} name="Message"  /></dd>
                        <dd className="text-red-700 text-start ml-4 mb-6 mt-[-10px]">
                        {(errors.Message?.type==="required")?<span>Message Required</span>:<span></span> }
                        </dd>

                        <div className='mt-10
                        '>
                            <Button type="submit" className='bg-blue-800 p-32 flex justify-center items-center w-full' variant="contained">Enter a Message</Button>
                        </div>
                    </form>
                </div>


            </div>

                <div className='flex justify-center items-center mb-24'>
                    <button className=' border border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500'>EXPLORE MORE</button>
                </div>

                <Info />
                <Footer />  

        </div>
    )
}