import React from "react";

import Navigate from "../Navigate";
import Sidebar from "../Sidebar";
const Transaction = ({ children }) => {
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

            <h1>Transaction Page</h1>
            </div>


           
           
           
           
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Transaction;
