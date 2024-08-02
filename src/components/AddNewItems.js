import React, { useState } from 'react';
import ellipse from "./Ellipse.png";
import item from "./item.png";

export default function AddNewItems() {
    const [itemName, setItemName] = useState('');
    const [images, setImages] = useState([]);
    const [price, setPrice] = useState('');
    const [pickupOption, setPickupOption] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('');
    const [details, setDetails] = useState('');
  
    const handleAddImage = (event) => {
      const files = Array.from(event.target.files);
      setImages([...images, ...files]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log({
        itemName,
        images,
        price,
        pickupOption,
        deliveryOption,
        details,
      });
    };
  
  return (
  <>
  <div className="big-container" style={{display:"flex"}}>
  <div className="container">
  <h2><span className="heading1" style={{fontFamily:"Playfair Display"}}>Add</span> <span className="heading2" style={{fontFamily:"Playfair Display", color:"#d03131"}}>New Items</span></h2>
     
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="form-control"
            placeholder="Enter item name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="itemImages">Images</label>
          <div className="images-row">
            <div className="images-box">
              {images.length === 0 ? (
                <p>No images added</p>
              ) : (
                images.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`preview ${index}`}
                    className="img-thumbnail"
                  />
                ))
              )}
            </div>
            <div className="add-image-box">
              <label htmlFor="fileInput" className="add-image-label">+</label>
              <input
                type="file"
                id="fileInput"
                multiple
                accept="image/*"
                onChange={handleAddImage}
                className="file-input"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="itemPrice">Price</label>
          <input
            type="number"
            id="itemPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            placeholder="Enter price"
          />


        </div>

    

        <div className="form-group" style={{display:"flex",gap:"2%"}}>
         
          <input
            type="checkbox"
            id="pickupOption"
            checked={pickupOption}
            onChange={(e) => setPickupOption(e.target.checked)}
          />
          <label htmlFor="pickupOption" className="checkbox-label">Pickup</label>
          <input
            type="checkbox"
            id="deliveryOption"
            checked={deliveryOption}
            onChange={(e) => setDeliveryOption(e.target.checked)}
          />
          <label htmlFor="deliveryOption" className="checkbox-label">Delivery</label>
        </div>
       

       

        <div className="form-group">
          <label htmlFor="itemDetails">Details</label>
          <textarea
            id="itemDetails"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="form-control"
            placeholder="Enter details"
            rows={3}
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Save Changes</button>
      </form>
      </div>
      <div className="ellipse">
       
        <img src={ellipse} alt="ellipse" style={{marginLeft:"8%"}} />
        <img src={item} alt="item" />

    </div>
    
  </div>
   
   
    
  </>
  )
}
