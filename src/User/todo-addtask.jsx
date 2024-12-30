import React, { useState } from "react";
import { useFormik,Formik, Form, Field } from "formik";
import { TextField, MenuItem, Select, InputLabel, FormControl, Button, Box,} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const specializations = [
  { id: 1, label: "GeneralPhysician" },
  { id: 2, label: "Gynecologist" },
  { id: 3, label: "Dermatologist" },
  { id: 4, label: "Pediatricians" },
  { id: 5, label: "Neurologist" },
  { id: 6, label: "Gastroenterologist" },
];

const doctors = {
  GeneralPhysician: ["Dr. Siddhant Gaikwad", "Dr. Nikhil Pawar", "Dr. Chloe Evans"],
  Gynecologist: ["Dr. Rajratna Kharat", "Dr. Shubham Sherkar", "Dr. Ryan Martinez"],
  Dermatologist: ["Dr. Suraj Shahane", "Dr. Ava Mitchell", "Dr. Amelia Hill"],
  Pediatricians: ["Dr. Pawan More", "Dr. Jeffrey King"],
  Neurologist: ["Dr. Ruchira Bhangale", "Dr. Zoe Kelly" , "Dr. Patrick Harries"],
  Gastroenterologist: ["Dr. Taylor", "Dr. Anderson"],

};

const slots = Array.from({ length: 12 }, (_, i) => ({
  value: `${10 + i}:00 - ${11 + i}:00`,
  label: `${10 + i}:00 - ${11 + i}:00`,
}));

export function ToDoAddTask() {

  const [cookies, setCookie, removeCookie] = useCookies('username');

  let navigate = useNavigate()


  const initialValues = {
    patientName: "",
    mobileNo: "",
    specialization: "",
    doctor: "",
    date: Dayjs,
    slot: "",
    UserName:cookies['username']
  };

  const handleSubmit = (task) => {
    axios.post(`http://127.0.0.1:6060/add-task`, task);
            toast.success('Appointment has been confirmed');
            alert('appointment Book Successfully..');
            navigate('/dashboard');
  };

  return (

    <div className="grid grid-cols-12 relative top-[150px]">

                <div className="col-span-2 h-[800px]">
                    <h1 className="p-3 ps-5 cursor-pointer text-black my-1 font-semibold bg-blue-100 border-e-4 border-e-blue-600 transition-all duration-500 ">Book Appointment</h1>
                    <Link to={'/dashboard'}><h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Appointment History</h1></Link>
                    <h1 className="p-3 ps-5 cursor-pointer text-black bg-slate-50 my-1 hover:font-semibold hover:bg-blue-50 hover:border-e-4 hover:border-e-blue-600 transition-all duration-500 ">Edit</h1>
                </div>

                <div className="relative -top-36 bg-blue-50 p-20 col-span-10">
                
                  <h2 className="text-center text-2xl font-semibold">{cookies['username']}- Book your Appointment </h2>
                    
                    <div className="rounded-md p-8 shadow-2xl bg-white mt-10">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                          {({ values, setFieldValue }) => (
                            <Form>
                              <Box
                                sx={{display: "flex",flexDirection: "column",gap: 3,maxWidth: 400,margin: "auto",mt: 5,}}>
                                {/* Patient Name */}
                                <Field
                                  as={TextField}
                                  name="patientName"
                                  label="Patient Name"
                                  variant="outlined"
                                  fullWidth
                                  required
                                />

                                {/* Mobile Number */}
                                <Field as={TextField} name="mobileNo" label="Mobile Number" type="tel" variant="outlined" fullWidth require />

                                {/* Specialization */}
                                <FormControl fullWidth required>
                                  <InputLabel>Specialization</InputLabel>
                                  <Select
                                    value={values.specialization}
                                    onChange={(e) => {
                                      setFieldValue("specialization", e.target.value);
                                      setFieldValue("doctor", ""); // Reset doctor when specialization changes
                                    }}
                                  >
                                    {specializations.map((spec) => (
                                      <MenuItem key={spec.id} value={spec.label}>
                                        {spec.label}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>

                                {/* Doctor */}
                                <FormControl fullWidth required disabled={!values.specialization}>
                                  <InputLabel>Doctor</InputLabel>
                                  <Select
                                    value={values.doctor}
                                    onChange={(e) => setFieldValue("doctor", e.target.value)}
                                  >
                                    {(doctors[values.specialization] || []).map((doc, index) => (
                                      <MenuItem key={index} value={doc}>
                                        {doc}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>

                                {/* Date Picker */}
                                <Box sx={{ width: "100%" }}>
                                  <DatePicker
                                    label="Select Date"
                                    name="date"
                                    value={values.date}
                                    disablePast
                                    onChange={(date) => setFieldValue("date", date)}
                                    shouldDisableDate={(date) =>
                                      date.isBefore(dayjs()) || date.isAfter(dayjs().add(7, "day"))
                                    }
                                    renderInput={(params) => (
                                      <TextField {...params} fullWidth required />
                                    )}
                                  />
                                </Box>

                                {/* Slot */}
                                <FormControl fullWidth required>
                                  <InputLabel>Slot</InputLabel>
                                  <Select
                                    value={values.slot}
                                    onChange={(e) => setFieldValue("slot", e.target.value)}
                                  >
                                    {slots.map((slot, index) => (
                                      <MenuItem key={index} value={slot.value}>
                                        {slot.label}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>

                                {/* Submit Button */}
                                <Button
                                  type="submit"
                                  variant="contained"
                                  color="primary"
                                  fullWidth
                                >
                                  Book Appointment
                                </Button>
                              </Box>
                            </Form>
                          )}
                        </Formik>
                      </LocalizationProvider>
                    </div>  

                </div>

        </div>
  );
};
