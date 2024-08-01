import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
// import "./styles/ForgetPassword.css";

const ForgetPassword = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const initialValues = { email: " " };

  const validationSchema = yup.object({
    email: yup.string().required("Invalid Email Address"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://password-reset-backend-keno.onrender.com/api/user/forgetpassword",
        values
      );
      setResponseMessage(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      setResponseMessage(error.response.data.message);
      toast.error(error.response.data.message);
      navigate("/login");
    }
  };
  return (
    <div className="conatiner">
      <div className="forms-container">
        <div className="signin-signup">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <h3>Forget Password</h3>
              <Field
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                name="email"
                aria-describedby="email-help"
                required
              />
              <ErrorMessage name="email" component="h6" className="errorMsg" />{" "}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Forgot Password?</h3>
            <p>
              Enter your email-id to reset your password. We'll send you a
              password reset link to your email.
            </p>
            <div className="d-flex justify-content-evenly">
              <NavLink to="/login">
                <button className="btn transparent" id="sign-in-btn">
                  Login
                </button>
              </NavLink>
              <NavLink to="/">
                <button className="btn transparent" id="sign-up-btn">
                  Home
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
