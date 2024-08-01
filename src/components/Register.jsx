import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import "./styles/registerStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [responseMessage, setResponseMessage] = useState(" ");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: "",
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup
      .string()
      .min(5, "Password must be atleast 5 charcters")
      .max(15, "Password must be atmost 15 charcters")
      .required("Password is required"),
    contactNumber: yup.string().required("ConatctNumber is required").matches(/^\d{10}$/, "Contact Number must be exactly 10 digits"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const { firstName, lastName, email, password, contactNumber } = values;
      const payloads = { firstName, lastName, email, password, contactNumber };
      const response = await axios.post(
        "https://password-reset-backend-keno.onrender.com/api/user/register",
        payloads
      );
      resetForm();
      console.log(response);
      setResponseMessage(response.data.message);
      toast.success(response.data.message);

    } catch (error) {
      console.log(error);
      if (error.response) {
        setResponseMessage(error.response.data.message);
         toast.error(error.response.data.message);

      } else if (error.request) {
        console.log(error.request);
      } else {
       
        console.log("Error", error.message);
      }
    }finally {
      setLoading(false);
    }
  };
  const [signUpMode, setSignUpMode] = useState(false);
  const toggleMode = () => {
    setSignUpMode((prevMode) => !prevMode);
    navigate("/login"); // Navigate to login
  };

  return (
    <div className={`container ${signUpMode ? "sign-Up-Mode" : ""}`}>
     
      <div className="container mt-5">
      <h1 className="text-center">Register Form</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <div>
                <div className="row mb-3">
                  <div className="col-sm-10">
                    <label htmlFor="">First Name</label>
                    <Field
                      type="text"
                      className="form-control"
                     
                      name="firstName"
                    />
                  </div>
                  <ErrorMessage
                    name="firstName"
                    component="h6"
                    className="errorMsg"
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-sm-10">
                  <label htmlFor="">Last Name</label>
                    <Field
                      type="text"
                      className="form-control"
                     
                      name="lastName"
                    />
                  </div>
                  <ErrorMessage
                    name="lastName"
                    component="h6"
                    className="errorMsg"
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-sm-10">
                  <label htmlFor="">Email</label>
                    <Field
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      
                      name="email"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="h6"
                    className="errorMsg"
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-sm-10">
                  <label htmlFor="">Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                      
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="h6"
                      className="errorMsg"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-10">
                  <label htmlFor="">Conatct Number: </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                     
                      name="contactNumber"
                    />
                    <ErrorMessage
                      name="contactNumber"
                      component="h6"
                      className="errorMsg"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </Form>
        </Formik>
        {/* <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Enter your email and password to log in to your account.</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={toggleMode}
              >
                Sign in
              </button>
            </div>
            <img src="/register.svg" className="image" alt="" />
          </div>
        </div> */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
