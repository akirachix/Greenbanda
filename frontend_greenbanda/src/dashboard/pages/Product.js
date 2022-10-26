import React from "react";

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

            <h1>Dashboard Page</h1>
            </div>

            <div className="boxes">
              <div className="box">
              <div className="sub-header">
              <h6>Total Amount</h6>
            </div>

              </div>
                <div className="box">
                <div className="sub-header">
              <h6>Orders</h6>
            </div>

              </div>
              <div className="box">
              <div className="sub-header">
              <h6>Stock Totals</h6>
            </div>

              </div>


            </div>
            <div className="graph">
              <div className="sub-header">

            <h6>Graph</h6>
              </div>

             
            </div>
           
           
           
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
<div className="sectiFon">
  <div className="sect-main">Product Page</div>
</div>;

export default Product;
