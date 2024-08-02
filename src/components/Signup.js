import React, { useState } from "react";
import cross from "./Cross.png";
import bg1 from "./background_img.png";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
   const [phone, setPhone] = useState("");
   const [selectedCountryCode, setSelectedCountryCode] = useState("+1"); // Default to US country code
   const [countries, setCountries] = useState([]);

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  const history = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const handleMainButtonClick = () => {
    setShowOptions(true);
  };


  return (
    <div
      className="background-image d-flex align-items-center "
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="container " style={{ height: "100vh" }}>
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <div className="col-md-5">
            <div className="card1 position-relative">
              <Link to="/">
                <img
                  src={cross}
                  alt="Close"
                  className="close-icon"
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                />
              </Link>
              <div
                className="card-header text-start"
                style={{
                  backgroundColor: "#F5E4B8",
                  fontSize: "30px",
                  color: "#601A1A",
                  fontWeight: "500",
                }}
              >
                Sign Up
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      style={{
                        backgroundColor: "#F5E4B8",
                        borderWidth: "2px",
                        borderColor: "#0000001c",
                      }}
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                      style={{
                        backgroundColor: "#F5E4B8",
                        borderWidth: "2px",
                        borderColor: "#0000001c",
                      }}
                    />
                  </div>
                  <div className="form-group my-3 d-flex align-items-center">
                    <select
                      className="form-control"
                      id="countryCode"
                      style={{
                        backgroundColor: "#F5E4B8",
                        borderWidth: "2px",
                        borderColor: "#0000001c",
                        marginRight: "10px",
                        flex: "0 0 30%",
                      }}
                      value={selectedCountryCode}
                      onChange={handleCountryCodeChange}
                    ></select>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile Number"
                      onChange={handlePhoneChange}
                      style={{
                        backgroundColor: "#F5E4B8",
                        borderWidth: "2px",
                        borderColor: "#0000001c",
                        flex: "1",
                      }}
                    />
                  </div>
                  {/* <div className="form-group my-3">
                  <input type="text" className="form-control" id="mobile" placeholder="Mobile Number"  style={{backgroundColor: "#F5E4B8", borderWidth: "2px", borderColor:"#0000001c" }} />
                </div> */}
                  <div className="form-group my-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      style={{
                        backgroundColor: "#F5E4B8",
                        borderWidth: "2px",
                        borderColor: "#0000001c",
                      }}
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      style={{
                        backgroundColor: "#F5E4B8",
                        borderWidth: "2px",
                        borderColor: "#0000001c",
                      }}
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm password"
                      style={{
                        backgroundColor: "#F5E4B8",
                        borderWidth: "2px",
                        borderColor: "#0000001c",
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-warning w-100 p-1 my-3"
                    onClick={handleMainButtonClick}
                    style={{
                      color: "white",
                      font: "Inter",
                      fontSize: "20px",
                      backgroundColor: "#F87400",
                    }}
                  >
                    Create Account
                  </button>

                  {showOptions && (
                    <div className="options-container">
                       <Link to="/main">
                      <button
                        className="custom-button"
                        
                      >
                        Login as User
                      </button>
                     </Link>
                     <Link to="/business">
                      <button
                        className="custom-button"
                       
                      >
                        Login as Business
                      </button>
                      </Link>
                    </div>
                  )}
                </form>
              </div>
              <div
                className="card-footer"
                style={{ backgroundColor: "#F5E4B8" }}
              >
                <p className="text-center" style={{ color: "#601A1A" }}>
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    style={{ color: "#F87400", fontWeight: "medium" }}
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
