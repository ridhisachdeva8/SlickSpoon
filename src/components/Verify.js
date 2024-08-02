import React, { useState, useRef } from 'react';
import cross from './Cross.png'
import bg3 from './background_img3.png'
import { Link } from 'react-router-dom';

export default function Verify() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ''); 
    if (value.length > 1) return;

    setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const otpCode = otp.join('');
   
    console.log(otpCode);
  };
  return (
    <div className="background-image d-flex align-items-center" style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', height: '100vh' }}>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <div className="col-md-5">
            <div className="card1 position-relative">
            <Link to="/">
              <img
                src={cross}
                alt="Close"
                className="close-icon"
                style={{ position: "absolute", top: "20px", right: "20px", width: "20px", height: "20px", cursor: "pointer" }}
              />
              </Link>
              <div className="card-header text-start my-3" style={{ backgroundColor: "#F5E4B8", fontSize: "30px", color: "#601A1A", fontWeight: "500" }}>
                Verify Your Account <br />
                <p class="text-start my-2" style={{ fontSize: "15px", color: "#601A1A", fontWeight: "400" }}>We sent a verification code to your email</p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                <p class="text-start" style={{fontSize: "15px", color: "#601A1A", fontWeight: "500"}}>Code</p>
                  <div className="d-flex justify-content-start  ">
                    
                    {otp.map((data, index) => (
                      <input
                        key={index}
                        type="text"
                        className="form-control text-center mx-1"
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        maxLength="1"
                        style={{
                          backgroundColor: "#F5E4B8",
                          borderWidth: "2px",
                          borderColor: "#0000001c",
                          width: "40px",
                          height: "40px",
                          fontSize: "24px",
                        }}
                        ref={(el) => (inputRefs.current[index] = el)}
                      />
                    ))}
                  </div>
                  <button type="submit" className="btn btn-warning w-100 p-1 my-3" style={{ color: "white", font: "Inter", fontSize: "20px", backgroundColor: '#F87400' }}>
                    Verify
                  </button>
                </form>
              </div>
              <div className="card-footer" style={{ backgroundColor: "#F5E4B8" }}>
                <p className="text-center" style={{ color: "#601A1A" }}>Didn't receive the code? <a href="/" style={{ color: "#F87400", fontWeight: 'medium' }}>Resend</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
