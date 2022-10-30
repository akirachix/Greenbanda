import React from "react";
import "./navigate.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navigation = ({ children }) => {
  return (
    <div>
      <div className="bar">
        <div className="nav-bar">
          <div className="icons">
            <h4>
              <FaBell />
            </h4>
            <h4>
              <FaUserCircle />
            </h4>
          </div>
        </div>{" "}
        <br></br>
        <div className="sect-main">
          <div>
            <div className="search">
              {/* <Navigate/> */}
              {/* <Sidebar/> */}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
