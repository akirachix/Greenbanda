import React from "react";
import onion from '../dash-img/onions.jpg';
import Navigate from "../Navigate";
import Sidebar from "../Sidebar";
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
                  <img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
                  

                </div>
                <div className="row">
                  <div className="wrap">
                  <img src={onion} alt="Market"  width="100%" height="177.5vh"/>

                  </div>
                  <div className="wrap">
                  <img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
                  

                </div>
                <div className="row">
                  <div className="wrap">
                  <img src={onion} alt="Market"  width="100%" height="177.5vh"/>

                  </div>
                  <div className="wrap">
                  <img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>

                  

                </div>
                <div className="row">
                  <div className="wrap">
                  <img src={onion} alt="Market"  width="100%" height="177.5vh"/>

                  </div>
                  <div className="wrap">
                  <img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
                  

                </div>
                <div className="row">
                  <div className="wrap">
                  <img src={onion} alt="Market"  width="100%" height="177.5vh"/>

                  </div>
                  <div className="wrap">
                  <img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={onion} alt="Market"  width="100%" height="177.5vh"/>

</div>
<div className="wrap">
<img src={onion} alt="Market"  width="100%" height="177.5vh"/>

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
