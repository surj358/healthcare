import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


export function Demo() {

  const [successMessage, setSuccessMessage] = useState(null);

  const specialties = ["Cardiology", "Dermatology", "Pediatrics", "Orthopedics"];
  const doctors = {
    Cardiology: ["Dr. Smith", "Dr. Brown"],
    Dermatology: ["Dr. Johnson", "Dr. Taylor"],
    Pediatrics: ["Dr. Lee", "Dr. White"],
    Orthopedics: ["Dr. Walker", "Dr. Hall"],
  };

  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM",
    "08:00 PM - 09:00 PM",
    "09:00 PM - 10:00 PM",
  ];

  const currentDate = new Date();
  const dateOptions = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(currentDate.getDate() + i);
    return date.toISOString().split("T")[0];
  });

  const validationSchema = Yup.object().shape({
    patientName: Yup.string()
      .required("Patient name is required")
      .min(2, "Name must be at least 2 characters"),
    mobile: Yup.string()
      .required("Mobile number is required")
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
    speciality: Yup.string().required("Please select a specialty"),
    doctor: Yup.string().required("Please select a doctor"),
    date: Yup.string().required("Please select a date"),
    slot: Yup.string().required("Please select a time slot"),
    message: Yup.string().max(200, "Message cannot exceed 200 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    setSuccessMessage(values);
    resetForm();
    setTimeout(() => setSuccessMessage(null), 5000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">Book an Appointment</h1>
      <Formik
        initialValues={{
          patientName: "",
          mobile: "",
          speciality: "",
          doctor: "",
          date: "",
          slot: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-4">
            {/* Patient Name */}
            <div>
              <label className="block text-gray-700 font-medium">Patient Name</label>
              <Field
                name="patientName"
                placeholder="Enter patient name"
                className="w-full border rounded-md p-2 mt-1"
              />
              <ErrorMessage name="patientName" component="div" className="text-red-500 text-sm" />
            </div>
            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-medium">Mobile Number</label>
              <Field
                name="mobile"
                placeholder="Enter mobile number"
                className="w-full border rounded-md p-2 mt-1"
              />
              <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm" />
            </div>
            {/* Speciality */}
            <div>
              <label className="block text-gray-700 font-medium">Speciality</label>
              <Field
                as="select"
                name="speciality"
                className="w-full border rounded-md p-2 mt-1"
                onChange={(e) => {
                  setFieldValue("speciality", e.target.value);
                  setFieldValue("doctor", "");
                }}
              >
                <option value="">Select a speciality</option>
                {specialties.map((speciality) => (
                  <option key={speciality} value={speciality}>
                    {speciality}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="speciality" component="div" className="text-red-500 text-sm" />
            </div>
            {/* Doctor */}
            <div>
              <label className="block text-gray-700 font-medium">Doctor</label>
              <Field as="select" name="doctor" className="w-full border rounded-md p-2 mt-1">
                <option value="">Select a doctor</option>
                {values.speciality &&
                  doctors[values.speciality]?.map((doctor) => (
                    <option key={doctor} value={doctor}>
                      {doctor}
                    </option>
                  ))}
              </Field>
              <ErrorMessage name="doctor" component="div" className="text-red-500 text-sm" />
            </div>
            {/* Date */}
            <div>
              <label className="block text-gray-700 font-medium">Date</label>
              <Field as="select" name="date" className="w-full border rounded-md p-2 mt-1">
                <option value="">Select a date</option>
                {dateOptions.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
            </div>
            {/* Time Slot */}
            <div>
              <label className="block text-gray-700 font-medium">Time Slot</label>
              <Field as="select" name="slot" className="w-full border rounded-md p-2 mt-1">
                <option value="">Select a time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="slot" component="div" className="text-red-500 text-sm" />
            </div>
            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <Field
                as="textarea"
                name="message"
                placeholder="Additional message (optional)"
                className="w-full border rounded-md p-2 mt-1"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
            </div>
            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      
      {/* Success Message */}
      {successMessage && (
        <div
          className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md shadow-lg transition-opacity duration-300 animate-fadeInOut"
        >
          <p>Thank you, {successMessage.patientName}!</p>
          <p>Your appointment with {successMessage.doctor} is confirmed on {successMessage.date} at {successMessage.slot}.</p>
        </div>
      )}
    </div>
  );
};
