import React from "react";
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa"

const Navbar = ({ children }) => {
  return (
    <div>
         <div className='nav'>
                <div className='logo'>
                <h1>GB</h1>
                <h6 className='brand'>GreenBanda</h6>

                </div>
                <div className='navigation' >
              
          

                <div>
                    <Link className='nav-link' to="/">Home</Link>
                </div>
                <div >
                    <Link className='nav-link' to="/vegetables">Vegetables</Link>
                </div>
                <div >
                    <Link className='nav-link' to="/fruits">Fruits</Link>
                </div>
                
                <div>
                    
                    <Link className='nav-link' to="/login">LogIn</Link>
                </div>

                <div>
                    
                    <Link className='nav-link' to="/#">            <FaShoppingCart/>
</Link>
                </div>

                <div className="all-humbager">
                    <div className="humbager"></div>
                    <div className="humbager"></div>
                    <div className="humbager"></div>

                </div>
                </div>
               
            </div>
            { children }
    </div>
  );
};
export default Navbar;
