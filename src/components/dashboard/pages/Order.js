import React from "react";

import Navigate from "../Navigate";
import Sidebar from "../Sidebar";
const Order = ({ children }) => {
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

            <h1>Orders List</h1>
            <div className="nav-but">
              <div className="but">
                <button className="btn-button">Upload</button>
                <button className="btn-button">Add New</button>
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
              <div className="border-category">
        
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
            </tr>
            <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0113544193</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0790500842</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0729837078</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
              <td>2022</td>
              <td>Jane Tolentino</td>
              <td>0745457444</td>
              <td>Ksh 345</td>
              <td>Delivered</td>
              <td>26.10.2022</td>              
            </tr>     <tr>
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
            

              </div>

            </div>

            
             
          
           
           
           
            
            </div>
          </div>
        </div>
      </div>
    
  );
};
<div className="sectiFon">
  <div className="sect-main">Order Page</div>
</div>;

export default Order;
