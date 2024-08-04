import React from "react";
import food1 from "./food1.jpeg";
import food2 from "./food2.jpeg";
import food3 from "./food3.jpeg";
import food4 from "./food4.jpeg";
import food5 from "./food5.jpeg";
import food6 from "./food6.jpeg";
import food7 from "./food7.jpeg";
import food8 from "./food8.jpeg";
import food9 from "./food9.jpeg";
import food10 from "./food10.jpeg";
import food11 from "./food11.jpeg";
import food12 from "./food12.jpeg";
import food13 from "./food13.jpeg";
import food14 from "./food14.jpeg";
import food15 from "./food15.jpeg";
import food16 from "./food16.jpeg";
import food17 from "./food17.jpeg";
import food18 from "./food18.jpeg";
import food19 from "./food19.jpeg";
import food20 from "./food20.jpeg";
import food21 from "./food21.jpg";
import food22 from "./food22.jpeg";
import food23 from "./food23.jpeg";
import food24 from "./food24.jpeg";
import food25 from "./food25.jpeg";
import food26 from "./food26.jpeg";
import food27 from "./food27.jpeg";
import food28 from "./food28.jpeg";
import food29 from "./food29.jpeg";
import food30 from "./food30.jpeg";


export default function Menu() {
  return (
    <div className="menu">
      <div className="bar">
        <h2>Our Menu</h2>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
        <div className="option mb-3">
  <button type="button">All</button>
  <button type="button">Breakfast</button>
  <button type="button">Main Dishes</button>
  <button type="button">Drinks</button>
  <button type="button">Desserts</button>
</div>

      </div>
     
      <div id="carouselExampleInterval" className="carousel slide my-5" data-bs-ride="carousel">
      <div className="container">
        <div className="carousel-inner my-5">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src={food1} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Dark Chocolate Muffins</h5>
                    <p className="card-text">
                    Cocoa, sugar, chocochips and cocoa butter.
                    </p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Gill Bakers</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food2} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Cream Filled Donuts</h5>
                    <p className="card-text">Milk, eggs, vanilla, active dry yeast , hot water</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Papa'z Breads</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food3} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Dal Makhani</h5>
                    <p className="card-text">Silky, rich, and buttery slow cooked black lentils with mellow smokiness, a Punjab Grill's signature</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Punjab Grill</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food4} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Paneer Tikka</h5>
                    <p className="card-text">
                    Paneer Pieces marinated in Indian spices and charred in tandoor with some aroma spices.
                    </p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Baba Da Dhaba</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food5} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title"> Fusilli Primivera</h5>
                    <p className="card-text">Fusilli pasta topped with vegetables in a mixture of tomato concasse and cheese sauce.</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Diggin</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food6} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Egg Fried Noodles</h5>
                    <p className="card-text">Green Beans, bell peppers, noodles, hot sause and rice vinegar</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Basant Food Court</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src={food7} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Veg Cutlets</h5>
                    <p className="card-text">Mish-Mash of potatoes and fresh vegetables wrapped in a crispy coating.</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Godrej Yummiez</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food8} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Truffle Cake</h5>
                    <p className="card-text">Made of chocolate cake layers filled with custard, then covered in ganache and chocolate chips</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Royal Bakers</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food9} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Death of Chocolate</h5>
                    <p className="card-text">
                    Made of chocolate cake layers filled with custard, then covered in ganache and chocolate chips.
                    </p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Madaan Bakers</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food10} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Fried Rice</h5>
                    <p className="card-text">
                    carrots, French beans, bell peppers, green onions & green peas
                    </p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Zoca Cafe</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food11} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Dry Munchurian</h5>
                    <p className="card-text">
                    Corn flour, maida flour, spring onion, bell peppers, soy sauce, chili sauce, minced garlic, ground pepper,
                    </p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Zoro Cafe</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food12} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Vegetable Curry</h5>
                    <p className="card-text"> Made with onions, tomatoes, ginger, garlic, red chilli powder and garam masala.</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Hebbar's Kitchen</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src={food13} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Cheesecake </h5>
                    <p className="card-text"> A soft fresh cheese (typically cottage cheese, cream cheese, quark or ricotta), eggs, and sugar</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Sally's Baker</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food14} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Spring Roll</h5>
                    <p className="card-text">  A paper-thin wrapper that's made from flour and water. </p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>High Street Cafe</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food15} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Veg Momos</h5>
                    <p className="card-text"> Made with Corn, Cheese, Refined Wheat Flour, Butter, Margarine and Fat Spread, Capsicum Green, Red Capsicum</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Ninja Momos</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food16} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Puff Patties</h5>
                    <p className="card-text"> light and flaky pastry made from a laminated dough, or dough that is made by alternating layers of butter and dough</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Yummy Tummy</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food17} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Paneer Samosa</h5>
                    <p className="card-text"> Made with delicious, natural, and healthy Desi Natural Paneer and Hung Yoghurt</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Janta Bakery</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food18} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Chilli Potato</h5>
                    <p className="card-text"> Made with garlic, green chilies, onions, spring onions, chilli sauce and soya sauce</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Crispy and crunchy</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src={food19} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Kachori</h5>
                    <p className="card-text">Yellow mung dal (split yellow lentils) cooked with a blend of spices and herbs, including cumin, ginger, green chili, turmeric, and coriander. </p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Petu halwaai</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food20} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Pani Puri </h5>
                    <p className="card-text"> pani puri are made from flour or sooji (cream of wheat or rava) or both</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Chunky Fast Food</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food21} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Chole</h5>
                    <p className="card-text"> Made of chickpeas and adding spices such as cumin, coriander seeds, turmeric powder, and chili powder.</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Pindi Wala</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food22} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Veg Kabab</h5>
                    <p className="card-text"> leafy greens and veggies like spinach, coriander leaves, green peas, potatoes and Indian spices. </p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Nawab's Kitchen</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food23} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Pav Bhaji</h5>
                    <p className="card-text">a tasty and nutritious blend of vegetables, including potatoes, cauliflower, peas, carrots, and onions</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Street Foody</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food24} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Kadhi Chawal</h5>
                    <p className="card-text"> Made with  Curd, Besan (Chickpea Flour) and different spices</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Punjabi Dhaba</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src={food25} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Palak Paneer</h5>
                    <p className="card-text"> Made with fresh spinach, onions, spices, paneer and herbs</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Punjabi Dhaba</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food26} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Sambar</h5>
                    <p className="card-text"> Made with lentils, mixed vegetables, tamarind, herbs, spices & a special aromatic spice powder known as sambar powder</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Anna ka Ghar</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food27} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Black Mutton Chaap</h5>
                    <p className="card-text"> Made with  Soy, Refined Wheat Flour, Salt, Wheat Flour, Spices Condiments</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Sardar Chaap Corner</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>

                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food28} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Boondi Raita</h5>
                    <p className="card-text">  curd (yogurt) and melt-in-the-mouth boondi (fried gram flour balls) together with a few ground spices and herbs</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Janak Dhaba</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food29} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Steamed Rice</h5>
                    <p className="card-text"> Rice </p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Punjabi Dhaba</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={food30} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Malai Kheer</h5>
                    <p className="card-text"> Made with milk, sugar and rice</p>
                    <p style={{color:"#D03131", fontWeight:"bold"}}>Gokul Sweets</p>
                    <div className="mt-auto d-flex justify-content-center w-100">
        <button type="button" className="btn btn-primary">Order Now</button>
      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:"#D03131" ,color:"white", borderRadius:"20px", marginRight: "70%"}}></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:"#D03131" ,color:"white", borderRadius:"20px",marginLeft: "70%"}}></span>
          <span className="visually-hidden">Next</span>
        </button>
     
      </div>
     
    </div>
  );
}
