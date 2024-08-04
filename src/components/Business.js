import React, { useState, useEffect } from 'react';
import OrderBox from './OrderBox';
import biss1 from "./biss1.png";
import biss2 from "./biss2.png";
import leaf1 from "./leaf.png";
import ReviewBox from './ReviewBox';
import logo from "./SS logo.png";
import partners from "./partners.jpg";
import { Link } from 'react-router-dom';


export default function Business() {
    const [preparingOrders, setPreparingOrders] = useState(0);
  const [requestedOrders, setRequestedOrders] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [showPasta, setShowPasta] = useState(false);
  const [showText, setShowText] = useState(false);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchOrders = () => {
      // Example data, replace with actual API calls
      setPreparingOrders(5);
      setRequestedOrders(10);
    };
    const fetchReviews = () => {
        // Example review data, replace with actual API calls
        const exampleReviews = [
          { rating: 5, date: '2024-07-31', review: 'Enjoy affordable, nutritious meals and support local businesses all while fostering a greener community,aiming to minimize waste and promote eco-friendly practices.', username: 'JohnDoe' },
          { rating: 4, date: '2024-07-30', review: 'Enjoy affordable, nutritious meals and support local businesses all while fostering a greener community,aiming to minimize waste and promote eco-friendly practices.', username: 'JaneDoe' },
          // Add more reviews as needed
        ];
        setReviews(exampleReviews);
      };

    fetchOrders();
    fetchReviews();

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

  
  return (
   <>
    <div className="business-page">
      <h1 className="dashboard-heading">
      <span className="hotel">Hotel</span> <span className="name">Name</span>
      </h1>
      <div className="orders-container">
        <OrderBox title="Orders Preparing" count={preparingOrders} />
        <OrderBox title="Orders Requested" count={requestedOrders} />
      </div>
      <div className="circle1">
      <img src={biss2} alt="Circle Content" className="business-img2" />
      <img src={biss1} alt="Circle Content" className="business-img1" />
    
        </div>
       
        <img
          src={leaf1}
          className="leaf-img"
          alt="leaf1"
          style={{ width: "10%" }}
        />
        <Link to="/newitems"> 
        <button type="button" className="btn btn-primary" style={{position:"absolute",left: "15%", backgroundColor:"#D03131", width:"200px", borderColor:"#D03131"}}> Add Items</button>
        </Link>
         
        
    </div>
    <div className="review" >
    <h2 >Customer Reviews</h2>
    <div className="review1">
    {reviews.map((review, index) => (
          <ReviewBox
            key={index}
            rating={review.rating}
            date={review.date}
            review={review.review}
            username={review.username}
          />
        ))}
    </div>
    </div>
    <div className="container">
    <div className="text-center my-3 py-2">
        <h1
          className="h1 text-centre my-3"
          style={{ fontFamily: "Playfair Display", fontStyle: "normal" }}
        >
          Why Partner with Us?
        </h1>
      </div>

     <div className="pasta-container2 my-5">
        <img
          src={partners}
          className={`rounded mx-auto d-block image-animation2 pasta-image2 ${
            showPasta ? "show" : ""
          }`}
          alt="pasta"
          style={{ width: "45%" }}
        />
        <div
          className={`text-top-left2 text-animation2 ${showText ? "show" : ""}`}
        >
          <p>Sell your surplus food instead of throwing it away, contributing to sustainability efforts</p>
        </div>
        <div
          className={`text-top-right2 text-animation2 ${showText ? "show" : ""}`}
        >
          <p>Generate additional income from food that would otherwise be discarded.</p>
        </div>
        <div
          className={`text-bottom-left2 text-animation2 ${
            showText ? "show" : ""
          }`}
        >
          <p> Reach a wider audience by connecting with new business partners looking for quality surplus food.</p>
        </div>
        <div
          className={`text-bottom-right2 text-animation2 ${
            showText ? "show" : ""
          }`}
        >
          <p>Enhance your brand's reputation by demonstrating commitment to reducing food waste and supporting the community</p>
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
};
