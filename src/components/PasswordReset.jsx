import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import "./styles/registerStyles.css";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const PasswordReset = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = async () => {
    try {
      const response = await axios.get("https://password-reset-backend-keno.onrender.com/api/user/getalluser");
      const reqUser = response.data.find((user) => user.email === email);
      if (!reqUser || req.randomString != token) {
        navigate("/error");
      }
    } catch (error) {
      console.error("Error Fectching Data", error);
    }
  };
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };
  const validationSchema = yup.object().shape({
    newPassword: yup.string().min(8).required("New Password is required"),
    confirmPassword: yup
      .string()
      .min(8)
      .required("Confirm Password is required")
      .oneOf([yup.ref("newPassword"), null], "Password must match"),
  });
  const handleSubmit = async (values) => {
    try {
      const response = await axios.put(
        "https://password-reset-backend-keno.onrender.com/api/user/resetpassword",
        { ...values, email }
      );
      setResponseMessage(response.data.message);
      toast.success(response.data.message);
      navigate("/login");
      console.log(response);
    } catch (error) {
      console.log(error);
      setResponseMessage(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2 className="title">Reset Password</h2>
          <div>
            <div className="container mt-5">
              <div className="row mb-3">
                <div className="col-sm-10">
                  <i class="fas fa-lock"></i>
                  <Field
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="newPassword"
                    name="newPassword"
                    required
                  />
                </div>
                <ErrorMessage
                  name="newPassword"
                  component="h6"
                  className="errorMsg"
                />
              </div>

              <div className="row mb-3">
                <div className="col-sm-10">
                  <i class="fas fa-lock"></i>
                  <Field
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="confirmPassword"
                    name="confirmPassword"
                    required
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="h6"
                    className="errorMsg"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-around">
                <button type="submit" className="btn btn-success">
                  Set Password
                </button>
                <button type="submit" className="btn btn-outline-info">
                  Forgot Password
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Set Password</h3>
            <p>
              Set a new password for your account. Choose a strong and unique
              password to ensure the security of your account.
            </p>
            <NavLink to="/login" className="btn transparent">
              SignIn
            </NavLink>
          </div>
          <img src="/reset.svg" alt="" />
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default PasswordReset;
