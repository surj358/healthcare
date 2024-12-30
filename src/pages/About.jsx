import axios from "axios";
import { assets } from "../assets/assets";
import { Accordion, Info } from "../components/accordian";
import { Footer } from "../components/footer";

import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function About() {

    const [submittedData, setSubmittedData] = useState(null);

  // Form validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    file: Yup.mixed()
      .required("A file is required")
      .test("fileSize", "File too large", (value) => !value || (value && value.size <= 1024 * 1024))
      .test("fileType", "Unsupported file format", (value) =>
        !value || (value && ["image/jpeg", "image/png"].includes(value.type))
      ),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("file", values.file);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSubmittedData(response.data);
    } catch (error) {
      console.error("Error uploading data", error);
    } finally {
      setSubmitting(false);
    }
  };

    return (

        <div>

            <div className="text-center text-2xl pt-10 text-gray-500" >
                <p>ABOUT <span className="text-gray-700 font-medium">Us</span></p>
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-12 justify-center items-center ">
                <img className="w-[1000px] md:max-w-[360px]" src={assets.about_image} alt="" />
                <div className="flex flex-col justify-center text-justify gap-6 md:w-2/4 text-base text-gray-600">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, eos excepturi! Eaque, ad esse ratione fuga necessitatibus est enim rerum!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem, eius accusamus consequatur corporis nihil modi ea quibusdam quas harum.</p>
                    <b className="text-gray-800">Our Vision</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe non iusto veniam illo tempora doloremque? Nobis at eum reprehenderit amet!</p>
                </div>
            </div>

            <div className=" text-xl my-8 flex justify-center items-center">
                <p>WHY <span className="text-gray-700 font-semibold" >CHOOSE US</span></p>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2 mg:flex-row mb-20">
                <div className="border-2 px-10 rounded-md mg:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
                    <b>Efficiency:</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis incidunt voluptatem sapiente iure sequi ratione, aspernatur fuga nisi voluptas!</p>
                </div>
                <div className="border-2 rounded-lg px-10 mg:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
                    <b>Convenience:</b>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aut labore aspernatur perferendis praesentium error corrupti quaerat quos ullam neque!</p>
                </div>
                <div className="border-2 rounded-lg px-10 mg:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
                    <b>Personalization:</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tenetur optio quos quibusdam. Magni tempora recusandae rem in enim itaque.</p>
                </div>
            </div>

            <Info />

            <div className="flex justify-center items-center" style={{ padding: "20px" }}>
      <h2>Upload Form</h2>
      <Formik
        initialValues={{ firstName: "", lastName: "", file: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div>
              <label>First Name:</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <label>Last Name:</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <label>File Upload:</label>
              <input
                type="file"
                name="file"
                onChange={(event) => setFieldValue("file", event.currentTarget.files[0])}
              />
              <ErrorMessage name="file" component="div" style={{ color: "red" }} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
            <Footer />
        </div>
    )
}