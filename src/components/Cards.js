import React from "react";
// import market from "../images/market.jpg";
import makeorder from "../images/Makeorder.png";
import payorder from "../images/Payorder.png";
import fastdev from "../images/fastdev-original.png";

// import {FaCartArrowDown} from 'react-icons/fa';
// import{FaDollarSign} from'react-icons/fa';
// import{FaTruck} from 'react-icons/fa';
import "./Cards.css";

const Cards = () => {
  return (
    <div className="icons">
      <div className="cart">
        <div className="order-cart">
          <img  className="icon"  src={makeorder} height="100" width='100' alt="make order" />

          {/* <FaCartArrowDown/> */}
        </div>
        <div className="order-head">
          <h1>Make An Order</h1>
        </div>
        <div className="orders">
          <p>
            Order from your trusted suppler of your choice, an grow your
            business.
          </p>
        </div>
      </div>

      <div className="cart">
        <div className="order-cart">
          <img className="icon" src={payorder} height="100" width='100' alt="make order" />

          {/* <FaDollarSign/> */}
        </div>
        <div className="order-head">
          <h1>Make payments</h1>
        </div>
        <div className="orders">
          <p>Save money save time by ordering with us.</p>
        </div>
      </div>

      <div className="cart">
        <div className="order-cart">
          {/* <FaTruck/> */}
          <img  className="icon"  src={fastdev} height="100" width='100' alt=" fast delivery" />
        </div>
        <div className="order-head">
          <h1>Get Fast Delivery</h1>
        </div>
        <div className="orders">
          <p>Always deliver more then expected.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
