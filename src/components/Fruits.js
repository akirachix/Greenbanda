import React from "react";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Navbar from "./Navbar";
import market from "../images/market.jpg";
import "./Fruits/fruits.css";
import apples from "../images/apples.jpg";
import avocado from "../images/avocado.jpg";
import banana from "../images/banana.webp";
import guava from "../images/guava.jpg";
import mangoes from "../images/mangoes.jpg";
import oranges from "../images/oranges.jpeg";
import pears from "../images/pears.jpg";
import pinapple from "../images/pineapple.webp";
import strawberry from "../images/strawberry.jpg";
import watermelon from "../images/watermelon.jpeg";
import passion from "../images/passion.jpg";
import coconut from "../images/coconut.jpg";

const Fruits = () => {
  return (
      <div>
       <Navbar/>
       <div className='opacity'></div>
      <div  className="gre">
      <img src= {market}  height="670vh" width="100%" alt="hello" />
      <div className="ser">
      <SearchBar />
      </div>
 
      <div className="titles">
        <h4>Recommended Fruits</h4>
      </div>
      <div className="category">
       <div className="Fruit-category">
        <div className="fruit-category">
          <div className="sub-box">
            <div className="fruit-title">
              <h4>Apples</h4>
            </div>
          </div>

          <img src={apples} height="206vh" width="100%" />
        </div>
        </div>

        <div className="Fruit-category">
          <div className="sub-box">
            <div className="fruit-title">
              <h4>Avocado</h4>
            </div>
          </div>
          <img src={avocado} height="206vh" width="100%" />

          </div>
          <div className="Fruit-category">
          <div className="sub-box">
            <div className="fruit-title">
              <h4>Bananas</h4>
            </div>
          </div>
          <img src={banana} height="206vh" width="100%" />
        </div>
        
        <div className="Fruit-category">
          <div className="sub-box">
            <div className="fruit-title">
              <h4>Guava</h4>
            </div>
          </div>
          <img src={guava} height="206vh" width="100%" />
          </div>
          </div>

          <div className="titles">
        <h4>More Fruits</h4>
      </div>
      <div className="category">
        <div className="Fruit-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Mangoes</h4>
            </div>
          </div>

          <img src={mangoes} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Oranges</h4>
            </div>
          </div>
          <img src={oranges} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Pears</h4>
            </div>
          </div>
          <img src={pears} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Pineapple</h4>
            </div>
          </div>
          <img src={pinapple} height="206vh" width="100%" />
        </div>
      </div>
      <div className="category">
        <div className="Fruit-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Strawberries</h4>
            </div>
          </div>

          <img src={strawberry} height="206vh" width="100%" />
        </div>
        <div className="Fruit-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Water melon</h4>
            </div>
          </div>
          <img src={watermelon} height="206vh" width="100%" />
        </div>
        <div className="Fruit-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Cococnut</h4>
            </div>
          </div>
          <img src={coconut} height="206vh" width="100%" />
        </div>
        <div className="Fruit-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Passion</h4>
            </div>
          </div>
          <img src={passion} height="206vh" width="100%" />
        </div>
      </div> 

      <Footer />
    </div> 
    
  </div>  
  

  );
};
export default Fruits;

