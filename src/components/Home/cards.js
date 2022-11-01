import React from "react";
// import Makeorder from "../image/Makeoder.png";


const Card = ({ children }) => {
    return (
     <div className="onboardings">
        { children }
        <div className="onboarding">

        {/* <img  className="icon"  src={Makeorder} height="100" width='100' alt="make order"/>   */}
         
         <div className="texthead">
         <h1>Make An Order</h1>
         </div>

         <div className="textbody">
         <p> Order from your trusted suppler of your choice, an grow your business.</p>
         </div>
         
        </div>


        <div className="onboarding">

          {/* <img  className="icon"  src={Makeorder} height="100" width='100' alt="make order"/>   */}
         
          <div className="texthead">
         <h1>Make payments</h1>
         </div>

         <div className="textbody">
         <p> Save money save time by ordering with us.</p>
         </div>

        </div>

        <div className="onboarding">
         
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
  