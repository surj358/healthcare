import React, { useEffect, useState } from "react";
import {Box, TextField,Typography,} from "@mui/material";
import { Button, Grid } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import data from "../assets/data.json";
import { useFormik } from "formik";
import axios from "axios";
import { doctors } from "../assets/assets"
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




export function Demo() {


  const formik = useFormik({
    initialValues: {
        Appointment_Id:0, 
        Title: '',
        Description:'',
        Date:'',
    },
    onSubmit: (task) => {
        axios.post(`http://127.0.0.1:6060/add-task`, task);
        alert('Task Added Successfully..');
    }
})

function HandleClick() {
  toast.success('Button clicked Successfully...!!', {
    autoClose:3000,
  })

}

  // -------------------states-----------------------

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  useEffect(() => {

    setStates(data.states)
  }, [])

  const handleStateChange = (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);

    const state = data.states.find(state => state.name === stateName);

    if(state){
      setDistricts(state.districts);
      setSelectedDistrict('');

    }
  }

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  }

  //---------------------states -end-------------------

    const [selectedOption, setSelectedOption] = useState("Appointment");

    const [selectedDate, setSelectedDate] = useState(null);
    const [slots, setSlots] = useState([]);
  
    // Generate time slots from 10:00 AM to 10:00 PM
    const generateSlots = () => {
      const slots = [];
      let startTime = dayjs().hour(10).minute(0); // 10:00 AM
      const endTime = dayjs().hour(22).minute(0); // 10:00 PM
  
      while (startTime.isBefore(endTime)) {
        slots.push(startTime.format("hh:mm A"));
        startTime = startTime.add(1, "hour"); // Increment by 1 hour
      }
      setSlots(slots);
    };
  
    const handleDateChange = (newDate) => {
      setSelectedDate(newDate);
      setSlots([]); // Reset slots until user clicks "Show Slots"
    };

    const renderContent = () => {
      switch (selectedOption) {
        case "Appointment":
          return (
            <div className="bg-blue-50 h-[1000px]">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{ maxWidth: "800px", margin: "auto", padding: 4, textAlign: "center", boxShadow: 3, borderRadius: 2, bgcolor: "#ffffff", position:'relative', top:'50px' }}>
                    <Typography variant="h4" gutterBottom>Book an Appointment</Typography>

                    <div>
                      <form onSubmit={formik.handleSubmit}>
                       <TextField onChange={formik.handleChange} sx={{marginX: 5}} varient='outlined' type='text' label='Patient name' size="small" />
                       <TextField onChange={formik.handleChange} varient='outlined' type="number" label='Mobile No.' size="small" />
                      <div className="flex justify-evenly my-5 items-center mx-auto border-2">
                          <select  id="state" value={selectedState} onChange={handleStateChange} className="border-2 border-gray-300 text-lg px-4 py-1 rounded-sm text-gray-600">
                           <option value="" disabled>Select State</option>
                            {states.map((state) => (
                          <option key={state.name} value={state.name}>{state.name}</option>
                         ))}
                         </select>

                         {
                          selectedState && (
                            
                              <select name="" id="district" value={selectedDistrict} onChange={handleDistrictChange} className="border-2 border-gray-300 text-lg px-4 py-1 rounded-sm text-gray-600">
                                <option value="" disabled>Select district</option>
                                {
                                  districts.map((district) => (
                                    <option key={district.name} value="district.name">{district.name}</option>
                                  ))
                                }
                              </select>
                            
                          )
                        }
                      </div>

                      <button></button>
                        
                    </form>



                    </div>
                    <Box sx={{marginBottom: 3}}>
                      <DatePicker label="Select Date" value={selectedDate} disablePast onChange={handleDateChange} shouldDisableDate={(date) => date.isBefore(dayjs()) || date.isAfter(dayjs().add(7, "day"))}renderInput={(params) => <Box component="div" {...params} />}/>
                    </Box>
                    <Button variant="contained" color="primary" onClick={generateSlots} disabled={!selectedDate} >
                    Show Slots
                    </Button>
                      <Box sx={{ marginTop: 3 }}>
                        {slots.length > 0 && (
                            <Box>
                              <Typography variant="h6" gutterBottom>
                                  Available Slots on {selectedDate?.format("DD MMM YYYY")}
                              </Typography>
                            <Grid container spacing={2}>
                                {slots.map((slot, index) => (
                                <Grid item xs={4} key={index}>
                                    <Button variant="outlined" fullWidth>
                                    {slot}
                                    </Button>
                                </Grid>
                                ))}
                            </Grid>
                            </Box>
                        )}
                      </Box>
                </Box>
              </LocalizationProvider>
              <Button varient='contained' color="primary" onClick={HandleClick}>Submit Form</Button>
            </div>
          );
        case "Appointment History":
          return (
            <div className="px-40">
                  <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">MY Appointment</p>
                  <div>
                      {doctors.slice(0,3). map((item, index) => (
                          <div className="grid grid-cols-2 gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
                              <div>
                                  <img className="w-40 bg-indigo-50" src={item.image} alt="" />
                              </div>
                              <div className="flex-1 text-sm text-zinc-600">
                                  <p className="text-neutral-800 font-semibold">{item.name}</p>
                                  <p>{item.speciality}</p>
                                  <p className="text-zinc-800 font-medium mt-1">address:</p>
                                  <p className="text-xs">{item.address.line1}</p>
                                  <p className="text-xs mt-1">{item.address.line1}</p>
                                  <p><span>Date & Time:</span>25, July, 2025 / 8:30 PM</p>
                              </div>

                              <div></div>
                              <div className="flex flex-col gap-2 justify-end ">
                                  <button  className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300 ">Pay Online</button>
                                  <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300">Cancel Appointment</button>
                              </div>
                          </div>
                      ))} 
                  </div>
             </div>
          );
        case "Edit":
          return (
            <div>
              <h1>Appointment User</h1>
            </div>
          );
        case "Logout":
          return (
            <div>
              <h1>Logout</h1>
            </div>
          )
        default:
          return null;
      }
    };

    return (

        <div>
           
            <div className="grid grid-cols-12">
                <div className="col-span-2 h-[800px]">
                {["Appointment", "Appointment History", "Edit", "Logout"].map((text) => (

                        <div button key={text} onClick={() => setSelectedOption(text)} className="relative top-20">
                          <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">{text}</h1>
                        </div>
                        ))}
                </div>
                <div className="col-span-10">

                {renderContent()}

                </div>

                <div>
                  <h1>State and district</h1>
                  <div>
                    <label htmlFor="state">Select State:</label>
                    <select name="" id="state" value={selectedState} onChange={handleStateChange}>
                      <option value="">--Select State--</option>
                      {states.map((state) => (
                        <option key={state.name} value={state.name}>{state.name}</option>
                      ))}
                    </select>
                  </div>
                  {
                    selectedState && (
                      <div>
                        <label htmlFor="district">--Select District--</label>
                        <select name="" id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                          <option value="">--select district</option>
                          {
                            districts.map((district) => (
                              <option key={district.name} value="district.name">{district.name}</option>
                            ))
                          }
                        </select>
                      </div>
                    )
                  }

                  <div>
                    {/* <button onClick={handleSubmit}>Submit</button> */}
                  </div>

                </div>

            </div>

            {/* user demo------------------------------------ */}

            
            
        </div>
    )
}