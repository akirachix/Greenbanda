

import React, { useState } from "react";
import "./Dashboard.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaMoneyBillWaveAlt,
  FaShoppingCart,
  FaShoppingBag,
} from "react-icons/fa";
// import Navigate from './navigate'
// import Sidebar from './sidebar';

function Delivery({ children }) {
  const [isExposed, setIsExposed] = useState(false);
  const toggle = () => setIsExposed(!isExposed);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/order",
      name: "Orders",
      icon: <FaShoppingCart />,
    },
    {
      path: "/customer",
      name: "Customer",
      icon: <FaUserAlt />,
    },
    {
      path: "/transaction",
      name: "Transaction",
      icon: <FaMoneyBillWaveAlt />,
    },
  ];
  return (
    <>
      <div className="section">
        <div className="container">
          <div 
          style={{ 
            width: isExposed ? "200px" : "50px" 
            }} className="sidebar">
            <div className="top_section">
              <h1
                style={{
                  display: isExposed ? "flex" : "none",
                  marginLeft: isExposed ? "6px" : "0px",
                }}
              >
                <Link className="log" to="./">
                  GB
                </Link>
              </h1>
              <h1
                style={{
                  display: isExposed ? "flex" : "none",
                  marginLeft: isExposed ? "6px" : "0px",
                }}
                className="logo2"
              >
                Admin <br></br> Supplier
              </h1>
              <div
                style={{ marginLeft: isExposed ? "36px" : "0px" }}
                className="bars"
              >
                <FaBars onClick={toggle} />
              </div>
            </div>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isExposed ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>

          {/* bar */}
        </div>
      </div>
    </>
  );
}
export default Delivery;
