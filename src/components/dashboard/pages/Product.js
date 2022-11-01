import React from "react";
import onion from '../dash-img/onions.jpg';
import Navigate from "../Navigate";
import Sidebar from "../Sidebar";
import apple from "../dash-img/apples.jpg"
import banana from "../dash-img/banana.webp"
import brocoli from "../dash-img/brocoli.jpeg"
import avocado from "../dash-img/avocado.jpg"
import spinach from "../dash-img/spinach.jpg"
import tomatoes from "../dash-img/tomatoes.jpeg"
import watermelon from "../dash-img/watermelon.jpeg"
import plums from "../dash-img/plums.jpg"
import turnips from "../dash-img/turnips.jpg"
import dates from "../dash-img/dates.jpg"
import strawberry from "../dash-img/strawberry.jpg"
import SweetPotatoes from "../dash-img/SweetPotatoes.jpeg"
import oranges from "../dash-img/oranges.jpeg"
import passion from "../dash-img/passion.jpg"
import pineapple from "../dash-img/pineapple.webp"
import pears from "../dash-img/pears.jpg"
import mangoes from "../dash-img/mangoes.jpg"
import grapes from "../dash-img/grapes.jpg"
import capsicum from "../dash-img/capsicum.jpg"





const Product = ({ children }) => {
  return (
    <div>
      <div className="whole">
        <div className="search">
         
          <div className="navigation-bar">
            <Navigate />
            <div>
            <Sidebar />
          </div>

            <div className="sect-main">
            {children}
            <div className="dash-head">

            <h1>Product List</h1>
            <div className="nav-but">
              <div className="but">
                <button className="btn-button">Upload</button>
                <button className="btn-button">Add New</button >
              </div>
            </div>
            </div>
            <div className="back-color-products">
              <div className="category-search">
                <input className="input-search" placeholder="search...."/>

                <div className="vegetable-btn">
                <button className="btn-button">Category</button>
                <button className="btn-button"> Last Added</button>
                </div>
              </div>
              <div className="all-products">
                <div className="row">
                  <div className="wrap">
                    <img src={onion} alt="Market"  width="100%" height="177.5vh"/>
                

                  </div>
                  <div className="wrap">
                  <img src={apple} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={banana} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={brocoli} alt="Market"  width="100%" height="177.5vh"/>

</div>
                  

                </div>
                <div className="row">
                  <div className="wrap">
                  <img src={avocado} alt="Market"  width="100%" height="177.5vh"/>

                  </div>
                  <div className="wrap">
                  <img src={spinach} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={tomatoes} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={watermelon} alt="Market"  width="100%" height="177.5vh"/>

</div>
                  

                </div>
                <div className="row">
                  <div className="wrap">
                  <img src={plums} alt="Market"  width="100%" height="177.5vh"/>

                  </div>
                  <div className="wrap">
                  <img src={turnips} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={dates} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={strawberry} alt="Market"  width="100%" height="177.5vh"/>

</div>

                  

                </div>
                <div className="row">
                  <div className="wrap">
                  <img src={SweetPotatoes} alt="Market"  width="100%" height="177.5vh"/>

                  </div>
                  <div className="wrap">
                  <img src={oranges} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={passion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={pineapple} alt="Market"  width="100%" height="177.5vh"/>

</div>
                  

                </div>
                <div className="row">
                  <div className="wrap">
                  <img src={pears} alt="Market"  width="100%" height="177.5vh"/>

                  </div>
                  <div className="wrap">
                  <img src={mangoes} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={grapes} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={capsicum} alt="Market"  width="100%" height="177.5vh"/>

</div>
                  

                </div>

              </div>

            </div>

            
             
          
           
           
           
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Product;
