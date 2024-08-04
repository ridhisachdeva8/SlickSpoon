import React from "react";
import logo from "./SS logo.png";
import bag from "./bag.webp";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="35"
              height="50"
              className="d-inline-block align-text-top"
            />{" "}
          </Link>
          <Link className="navbar-brand" to="/main" style={{fontWeight:"500"}}>
            SlickSpoon
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/main">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/main">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/">
                  <img src={bag} alt="Logo" width="20" height="20" />
                  <p>Cart</p>
                </Link>
              </li>
              <li className="nav-item" style={{ paddingTop: "10px" }}>
                <Link
                  className="btn btn-primary"
                  to="/signin"
                  role="button"
                  style= {{
                    backgroundColor: "#D03131",
                    border: "0",
                    borderRadius: "20px",
                  }}
                
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
