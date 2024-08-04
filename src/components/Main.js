import React, { useState, useEffect } from "react";
import img1 from "./pic1.png";
import img2 from "./pic2.png";
import leaf1 from "./leaf.png";
import leaf2 from "./leaf2.png";
import leaf3 from "./leaf3.png";
import pasta from "./pasta.png";
import bg4 from "./background_img4.png";
import item1 from "./item1.webp";
import item2 from "./item2.jpg";
import item3 from "./item3.webp";
import logo from "./SS logo.png";
import DealTimer from "./DealTimer";

export default function Main() {
  const [showPasta, setShowPasta] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 300) {
        setShowPasta(true);
      }
      if (offset > 500) {
        setShowText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dealEndTime = new Date();
  dealEndTime.setHours(dealEndTime.getHours() + 5);

  return (
    <>
      <div className="position-relative overflow-hidden ">
        <img
          src={leaf3}
          className="rounded float-start"
          alt="leaf2"
          style={{ width: "4%" }}
        />
        <p
          className="main-heading h1 my-0 mx-5"
          style={{ fontFamily: "Playfair Display" }}
        >
          Savvy Dining with a Sustainable Twist!{" "}
        </p>
        <p
          className="matter text-start my-1 mx-5"
          style={{ paddingLeft: "2%" }}
        >
          Enjoy affordable, nutritious meals and support local businesses all
          while fostering a greener community,aiming to minimize waste and
          promote eco-friendly practices.
          <img
            src={leaf2}
            className="rounded float-star"
            alt="leaf3"
            style={{ width: "20%" }}
          />
        </p>
        <div className="circle">
          <img src={img1} alt="Circle Content" className="circle-img" />
        </div>
        <img src={img2} alt="Additional Content" className="additional-img" />
        <img
          src={leaf1}
          className="rounded float-start"
          alt="leaf1"
          style={{ width: "10%" }}
        />
      </div>

      <div className="text-center my-3 py-2">
        <h1
          className="h1 text-centre my-3"
          style={{ fontFamily: "Playfair Display", fontStyle: "normal" }}
        >
          Why Choose Us?
        </h1>
      </div>

     <div className="pasta-container my-5">
        <img
          src={pasta}
          className={`rounded mx-auto d-block image-animation pasta-image ${
            showPasta ? "show" : ""
          }`}
          alt="pasta"
          style={{ width: "45%" }}
        />
        <div
          className={`text-top-left text-animation ${showText ? "show" : ""}`}
        >
          <p>Enjoy good food at 1/2 price or less</p>
        </div>
        <div
          className={`text-top-right text-animation ${showText ? "show" : ""}`}
        >
          <p>Rescue food near you</p>
        </div>
        <div
          className={`text-bottom-left text-animation ${
            showText ? "show" : ""
          }`}
        >
          <p>Help the environment, by reducing food waste</p>
        </div>
        <div
          className={`text-bottom-right text-animation ${
            showText ? "show" : ""
          }`}
        >
          <p>Try something new from local cafes, bakeries or restaurants</p>
        </div>
      </div>

      <div className="bar-container container-fluid mt-5">
        <div className="animated-bar d-flex">
          <div className="bar-item ">PASTRIES</div>
          <div className="bar-item ">NOODLES</div>
          <div className="bar-item ">MUFFINS</div>
          <div className="bar-item ">DONUTS</div>
          <div className="bar-item ">PASTA</div>
          <div className="bar-item ">CUTLES</div>
          <div className="bar-item ">MOMOS</div>
          <div className="bar-item ">SAMOSA</div>
          <div className="bar-item ">PUFFS</div>
          <div className="bar-item ">RICE</div>
          <div className="bar-item ">PASTRIES</div>
          <div className="bar-item ">NOODLES</div>
          <div className="bar-item ">MUFFINS</div>
          <div className="bar-item ">DONUTS</div>
          <div className="bar-item ">PASTA</div>
          <div className="bar-item ">CUTLES</div>
          <div className="bar-item ">MOMOS</div>
          <div className="bar-item ">SAMOSA</div>
          <div className="bar-item ">PUFFS</div>
          <div className="bar-item ">RICE</div>
        </div>
      </div>
      <div
        className="background-image5 d-flex align-items-center justify-content-center "
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundSize: "cover",
          height: "80vh",
        }}
      >
        
        <h1 className="offer text-center">HURRY UP!</h1>
        <h1 className="offer2 text-center">DEAL OF THE DAY</h1>

        <DealTimer endTime={dealEndTime} />
      </div>
    
      <div className="special container">
  <div className="row justify-content-center">
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="draw card">
        <img
          src={item1}
          className="card-img-top"
          alt="Punjabi Chaap"
        />
        <div className="card-body">
          <p className="card-text"> Chaap - Rs. 60</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="draw card">
        <img
          src={item2}
          className="card-img-top"
          alt="Veg Momos"
        />
        <div className="card-body">
          <p className="card-text">Veg Momos - Rs. 50</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="draw card">
        <img
          src={item3}
          className="card-img-top"
          alt="Idli Sambat"
        />
        <div className="card-body">
          <p className="card-text">Idli Sambat - Rs. 90</p>
        </div>
      </div>
    </div>
  </div>
</div>
      <footer className="footer my-3">
      <div className="footer-section">
        <h4>SlickSpoon</h4>
        <img
              src={logo}
              alt="Logo"
              width="35"
              height="35"
              className="d-inline-block align-text-top my-2"
            />
            <br />
            <p>Our job is to fill your tummy with delicious food and  with fast and free delivery.</p>
      </div>
      
      <div className="footer-section">
        <h4>About</h4>
        <p>About Us</p>
      </div>
      <div className="footer-section">
        <h4>Get in Touch</h4>
        <p>
          <ul style={{listStyleType:"none"}}>
            <li style={{margin:"5px"}}>Question or feedback?</li>
            <li style={{margin:"5px"}}>We’d love to hear from you</li>
          </ul>
        </p>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <p>
          <ul style={{listStyleType:"none"}}>
          <li style={{margin:"5px"}}>Account</li>
            <li style={{margin:"5px"}}>Support Centre</li>
            <li style={{margin:"5px"}}>Feedback</li>
            <li style={{margin:"5px"}}>Contact Us</li>
            <li style={{margin:"5px"}}>Accessibity</li>
          </ul>
           
         
        </p>
      </div>
    </footer>
    </>
  );
}
/* DEAL OF THE DAY */
