import React from "react";

import Navigate from "../Navigate";
import Sidebar from "../Sidebar";
const Customer = ({ children }) => {
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

            <h1>Customer List</h1>
            </div>
            <div className="innerchild">
            <form  className="table">
        <table className="content-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
             <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr>

          <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> 
          <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr> <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>
          </tr>
          </thead>
          </table>
       </form>

            </div>
            
           <div className="boxes">
           <div className="box">
                <div className="sub-header">
              <h6>Category</h6>
            </div>

              </div>
              <div className="boxing">
              <div className="sub-header">
              <h6>Last Added</h6>
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


export default Customer;
