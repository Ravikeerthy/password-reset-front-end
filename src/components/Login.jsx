import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import "./styles/registerStyles.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [responseMessage, setResponseMessage] = useState(" ");
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const userLogin = async (values, { resetForm }) => {
    try {
      const { email, password } = values;
      const payloads = { email, password };
      const response = await axios.post(
        "https://password-reset-backend-keno.onrender.com/api/user/login",
        payloads
      );
      console.log(response);
      setResponseMessage(response.data.message);
      toast.success(response.data.message);
      resetForm();
      navigate("/");
    } catch (error) {
      console.log(error);
      setResponseMessage(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  const [signUpMode, setSignUpMode] = useState(false);
  const toggleMode = () => {
    setSignUpMode((prevMode) => !prevMode);
    navigate("/");
  };

  return (
    <div>
      <div
        className={`container ${signUpMode ? "sign-up-mode" : ""}`}
        id="login-design"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={userLogin}
        >
          <Form>
            <div className="conatiner" id="align">
              <div className="row">
              <div className="col-6">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="" className="img-thumbnail"
                />
              </div>
              <div className="col-6 mt-5">
                <div className="row mb-3">
                  <div className="col-sm-10">
                    <i className="fa-solid fa-user"></i>
                    <Field
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
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
                    <i className="fa-solid fa-lock"></i>
                    <Field
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="h6"
                      className="errorMsg"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-success">
                  LogIn
                </button>
                <div>
                  <NavLink to="/forgetpassword" className="text-danger">
                    Forgot Password?
                  </NavLink>
                </div>
              </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      {/* <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Create an account to access exclusive features and content.</p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={toggleMode}
            >
              Sign up
            </button>
          </div>
          <img src="/log.svg" className="image" alt="" />
        </div>
      </div> */}
      <ToastContainer />
    </div>
  );
};

export default Login;
