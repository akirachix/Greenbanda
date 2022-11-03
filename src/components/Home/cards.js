import React from "react";
// import Makeorder from "../image/Makeoder.png";
import makeoder from "../image/Makeorder.png";
import makepayments from "../image/Payorder.png";
import fastdelivery from "../image/fastdev-original.png";



const Card = ({ children }) => {
    return (
     <div className="onboardings">
        { children }
        <div className="onboarding">
        <div className="onboarding-img">

        <img src={makeoder} alt="Market" width="" height=""/> 
</div>
         
         <div className="texthead">
         <h1>Make An Order</h1>
         </div>

         <div className="textbody">
         <p> Order from your trusted suppler of your choice, an grow your business.</p>
         </div>
         
        </div>


        <div className="onboarding">
        <div className="onboarding-img">

        <img src={makepayments} alt="Market" width="90%" height="225vh"/> 
</div>


          <div className="texthead">
         <h1>Make payments</h1>
         </div>

         <div className="textbody">
         <p> Save money save time by ordering with us.</p>
         </div>

        </div>

        <div className="onboarding">
          <div className="onboarding-img">
          <img src={fastdelivery} alt="Market" width="100%" height="225vh"/> 

          </div>
         
          <div className="texthead">
         <h1>Get Fast Delivery</h1>
         </div>

         <div className="textbody">
         <p> Always deliver more then expected.</p>
         </div>
         
        </div>

     </div>
    );
  };
  export default Card;
  