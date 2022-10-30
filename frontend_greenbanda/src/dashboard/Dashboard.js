import React from "react";

import Navigate from "../dashboard/Navigate";
import Sidebar from "../dashboard/Sidebar";
const Dashboard = ({ children }) => {
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

export default Dashboard;
