import React from 'react';
import cross from "./Cross.png";
import bg2 from "./background_img2.png";
import { Link } from "react-router-dom";

export default function Signin() {

  

  return (
    <div
      className="background-image d-flex align-items-center "
      style={{
        backgroundImage: `url(${bg2})`,
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
                Sign In <br />
                <p class="text-start my-2" style={{ fontSize: "22px" }}>
                  Welcom Back!!
                </p>
              </div>
              <div className="card-body">
                <form>
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
                 <Link to="/verify">
                  <button
                    type="submit"
                    className="btn btn-warning w-100 p-1 my-3"
                    
                    style={{
                      color: "white",
                      font: "Inter",
                      fontSize: "20px",
                      backgroundColor: "#F87400",
                    }}
                  >
                    Sign In
                  </button>
                  </Link>
                </form>
              </div>
              <div
                className="card-footer"
                style={{ backgroundColor: "#F5E4B8" }}
              >
                <p className="text-center" style={{ color: "#601A1A" }}>
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    style={{ color: "#F87400", fontWeight: "medium" }}
                  >
                    Sign Up
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
