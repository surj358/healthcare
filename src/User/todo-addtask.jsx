import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {Box} from "@mui/material";
import { TextField, MenuItem, Button, Grid, FormControl, InputLabel, Select, InputAdornment, Grid2 } from '@mui/material';
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import moment from 'moment';

const currencies = [
    {
      value: 'Dr. Siddhanth Gaikwad',
      label: 'Dr. Siddhanth Gaikwad',
      speciality: 'General Physician'
    },
    {
      value: 'Dr. RAjratna Kharat',
      label: 'Dr. RAjratna Kharat',
      speciality: 'Gynecologist'
    },
    {
      value: 'Dr. Suraj Shahane',
      label: 'Dr. Suraj Shahane',
      speciality: 'Dermatologist'
    },
    {
      value: 'Pawan More',
      label: 'Pawan More',
      speciality: 'Pediatricians'
    },
  ];
  
  const Speciality = [
    {
      value: 'General Physician',
      label: 'General Physician',
    },
    {
      value: 'Gynecologist',
      label: 'Gynecologist',
    },
    {
      value: 'Dermatologist',
      label: 'Dermatologist',
    },
    {
      value: 'Pediatricians',
      label: 'Pediatricians',
    },
    {
      value: 'Neurologist',
      label: 'Neurologist',
    },
    {
      value: 'Gastroenterologist',
      label: 'Gastroenterologist',
    },
  ];



export function ToDoAddTask(){

    const [cookies, setCookie, removeCookie] = useCookies('username');
    let navigate = useNavigate();
    
    const [selectedSpeciality, setSelectedSpeciality] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState(currencies);

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [error, setError] = useState('');

     // Generate time slots from 10 AM to 10 PM
        const generateTimeSlots = () => {
            const slots = [];
            for (let hour = 10; hour < 22; hour++) {
            const start = moment().startOf('day').hour(hour).minute(0);
            const end = start.clone().add(1, 'hour');
            slots.push({
                label: `${start.format('h:mm A')} - ${end.format('h:mm A')}`,
                value: `${start.format('HH:mm')}-${end.format('HH:mm')}`,
            });
            }
            return slots;
        };

        // Handle Date Change
        const handleDateChange = (date) => {
            setSelectedDate(date);
            setSelectedSlot('');
            setError('');
        };

        // Handle Time Slot Change
        const handleSlotChange = (event) => {
            setSelectedSlot(event.target.value);
        };

        // Handle form submission
        const handleSubmit = (event) => {
            event.preventDefault();
            if (!selectedDate || !selectedSlot) {
            setError('Please select a date and a time slot.');
            } else {
            setError('');
            alert(`Booking Confirmed! Date: ${selectedDate.format('DD-MM-YYYY')} Time: ${selectedSlot}`);
            }
        };

        // Handle change in speciality dropdown
            const handleSpecialityChange = (event) => {
            const selected = event.target.value;
            setSelectedSpeciality(selected);

            // Filter doctors based on the selected speciality
            const doctorsBySpeciality = currencies.filter((doctor) => doctor.speciality === selected);
            setFilteredDoctors(doctorsBySpeciality);
            };


    const formik = useFormik({
        initialValues: {
            Appointment_Id:0, 
            Title: '',
            Description:'',
            Date:'',
            PatientName:'',
            UserName:cookies['username']
        },
        onSubmit: (task) => {
            axios.post(`http://127.0.0.1:6060/add-task`, task);
            alert('Task Added Successfully..');
            navigate('/dashboard');
        }
    })

    return(
        <div className="grid grid-cols-12 relative top-[150px]">

            <div className="col-span-2 h-[800px]">
                <h1 className="p-3 ps-5 cursor-pointer text-black  my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Book Appointments</h1>
                <Link to={'/dashboard'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Appoitnment History</h1></Link>
                <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Edit</h1>
            </div>


            <div className="relative -top-36 bg-blue-50 p-20 col-span-10">
                <div className="bg-white shadow-lg mx-auto w-[700px] p-16">
                    <div className="text-2xl text-center justify-center mb-10 flex font-semibold"> <h1 className="bg-blue-100 px-4  text-lg rounded-md shadow-xl">{cookies['username']}</h1> - Book Your Appointments </div>
                    <form onSubmit={formik.handleSubmit} className="w-25">
                        <dl>
                            <dt>Appointment Id</dt>
                            <dd><input type="number" name="Appointment_Id" onChange={formik.handleChange} className="form-control" /></dd>
                            <dt>Patient Name</dt>
                            <dd><input type="text" name="PatientName" onChange={formik.handleChange}/></dd>
                            <dt>Title</dt>
                            <dd><input type="text" name="Title" onChange={formik.handleChange} className="form-control" /></dd>
                            <dt>Description</dt>
                            <dd>
                                <textarea rows="4" name="Description" onChange={formik.handleChange} className="form-control" cols="40"></textarea>
                            </dd>
                            <dt>Date</dt>
                            <dd><input type="date" name="Date" onChange={formik.handleChange} className="form-control" /></dd>
                        </dl>
                        <button type="submit" className="btn btn-warning w-50">Submit</button>
                        <Link className="btn btn-danger w-50" to="/dashboard">Cancel</Link>
                        <div className="flex justify-between mt-10">
                         <dd><TextField id="standard-basic" type="text" label="Patient Name" variant="standard" /> </dd>
                         <dd><TextField id="standard-basic" type="number" label="Mobile No." variant="standard" /></dd> 
                        </div>

                       {/* update new one============================--------------------------- */}

                        <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <div className="flex justify-between mt-10">
                            <dd>
                                <TextField sx={{width:'200px'}}
                                id="speciality-select"
                                select
                                label="Select Speciality"
                                value={selectedSpeciality}
                                onChange={handleSpecialityChange}
                                helperText="Please select a speciality"
                                variant="standard"
                                >
                                {Speciality.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </dd>

                            <dd>
                                <TextField sx={{width:'200px'}}
                                id="doctor-select"
                                select
                                label="Select Doctor"
                                helperText="Please select a doctor"
                                variant="standard"
                                >
                                {filteredDoctors.map((doctor) => (
                                    <MenuItem key={doctor.value} value={doctor.value}>
                                    {doctor.label}
                                    </MenuItem>
                                ))}
                                </TextField>                               
                            </dd>
                            </div>

                            <div className="flex mt-10 justify-between gap-16">
                            
                            <Box sx={{marginTop:1, width:'200px'}} >
                                  <DatePicker  label="Select Date" value={selectedDate} disablePast onChange={handleDateChange} shouldDisableDate={(date) => date.isBefore(dayjs()) || date.isAfter(dayjs().add(7, "day"))}renderInput={(params) => <Box component="div" {...params} />}/>
                            </Box>
                            <dd>
                                  <TextField sx={{width:'200px'}}
                                    id="doctor-select"
                                    select
                                    helperText="Please select a slot"
                                    variant="standard"
                                    labelId="slot-select-label"
                                    value={selectedSlot}
                                    size="small"
                                    onChange={handleSlotChange}
                                    label="Select Time Slot"
                                    disabled={!selectedDate} // Disable time slot selector until date is selected
                                >
                                  {generateTimeSlots().map((slot) => (
                                      <MenuItem key={slot.value} value={slot.value}>
                                        {slot.label}
                                      </MenuItem>
                                    ))}

                                  </TextField>
                            </dd>
                            </div>

                            </LocalizationProvider>

                                              
                    </form>

                    <div>


            </div>
                </div>

            </div>

        </div>
        
    )
}