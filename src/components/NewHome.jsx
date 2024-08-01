import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './styles/footerstyle.css';

const NewHome = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg m-3">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
            <img
              src="https://images.pexels.com/photos/694587/pexels-photo-694587.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block"
            />
            <b>PureAura</b>
          </NavLink>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/yogabenefits">
                  Benifits of Yoga
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
};

export default NewHome;
