import {Link } from "react-router-dom";
import React from "react";

import Navbar from "../Home/Navbar";
import market from "../image/market.jpg"
import Footer from '../Home/Footer';
import '../OrderReview/orderreview.css';





function OrderReview({ children }) {
    return(
       <div>
        <Navbar/>
        <div className='order-review-details'>
        { children }
            <div className='order-review-box'>
                <div className="whole-page">
                <div className="order-review-header">
                    <h1>1. DELIVERY DETAILS</h1>
                     <li ><a href="">Edit</a></li>
                     
                </div> <hr></hr>

                <div className="order-review-body">
                    <h5>DELIVERY </h5>
                    <h5>ESTIMATED ARRIVAL TIME</h5> <h5>DELIVERY RATE   KSH 700</h5>
                    
                     
                </div>
                <div className="order-review-header">
                    <h1>2. SHIPPING ADDRESS</h1>
                     <li ><a href="">Edit</a></li>
                     
                </div> <hr></hr>
                

                <div className="order-review-body">
                    <h5>+245766543344  </h5>
                    <h5>GATAKA ROAD</h5> <h5>DELIVERY RATE   KSH 700</h5>
                    
                     
                </div>

                <div className="order-review-header">
                    <h1>3. DERIVERY PAYMENT</h1>
                     <li ><a href="">Edit</a></li>
                     
                </div> <hr></hr>
                <div className="order-review-body">
                    <h5>M-PESA</h5>
                   
                    
                     
                </div>
                </div>
                <div className="summary-card">

                <div className="summary">
                <div className="order-review-header">
                    <h1>Order summary</h1>
                     <li ><a href="">Edit</a></li>
                     
                </div> <hr></hr>
                <div className="order-review-img">
                <img src={market} alt="Market"  width="27%" height="93vh"/>
                <div>
                    <h5>Peas</h5>
                    <h5>1200kg</h5>
                    <h5>Qty 1.</h5>
                </div>
                <div>
                    <h5>2500</h5>
                </div>

                </div> <hr></hr>

                <div className="order-review-img">
                <img src={market} alt="Market"  width="27%" height="93vh"/>
                <div>
                    <h5>Peas</h5>
                    <h5>1200kg</h5>
                    <h5>Qty 1.</h5>
                </div>
                <div>
                    <h5>2500</h5>
                </div>

                </div> <hr></hr>
                <div className="summary-subtotal">
                    <h5>Sub total</h5>
                    <h5>Ksh 5000</h5>
                </div>
                <div className="summary-subtotal">
                    <h5>Shipping</h5>
                    <h5>Ksh 500</h5>
                </div> <hr></hr>
                <div className="summary-subtotal">
                    <h5>Total</h5>
                    <h5>Ksh 5500</h5>
                </div> <hr></hr>

                </div>
                <div className="complete-order">
                    <Link to="/">
                    <button type="button">Complete Order</button>
                    </Link>

                  
                </div>
                </div>


                
            </div>

        </div>
       <Footer/>
       </div>


            

            

       

     
       
       
        

          
       
      
    )
};
export default OrderReview;