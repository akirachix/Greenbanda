import React from "react";
import { FaShoppingCart, FaDollarSign,
  FaShoppingBasket } from "react-icons/fa";
 
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
              <div className="sub-header2">
                
                  <div className="icon-cicle">

                  </div>
                <div className="dash-icon">

              <h4>
              <FaDollarSign />
            </h4>
                </div>
                <div className="sub-header">

              <h6>Total Amount</h6>
              <h6>0</h6>
                </div>

            </div>

              </div>
                <div className="box">
                <div className="sub-header2">
                <div className="icon-cicle">

</div>
                  <div className="dash-icon">

                  <h4>
                  <FaShoppingCart/>
                  </h4>
                  </div>
                  <div className="sub-header">

              <h6>Orders</h6>
              <h6>0</h6>
                  </div>
            </div>

              </div>
              <div className="box">
              <div className="sub-header2">
              <div className="icon-cicle">

</div>

                <div className="dash-icon">
                  <h4>

                <FaShoppingBasket/>
                  </h4>

                </div>
                <div className="sub-header">

              <h6>Stock Totals</h6>
              <h6>0</h6>
                </div>
            </div>

              </div>


            </div>
            <div className="graph">
              <div className="sub-header">

            <h6>Graph</h6>
              </div>
              

             
            </div>
            <div>
            <div className="app-container">
              <div className="dash-head latest">

        <h1>Latest Orders</h1>
              </div>
      <div className="border">
        
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
    </div>
  );
};
<div className="sectiFon">
  <div className="sect-main">Dashboard Page</div>
</div>;

export default Dashboard;
