import React, { useState } from 'react';

import '../App.css'
import { Link, NavLink } from 'react-router-dom';
import {   FaTh,
    FaBars,
    FaUserAlt,
    FaShoppingCart,
    FaMoneyBillWaveAlt,
    FaShoppingBag
} from "react-icons/fa"




function About ({children}) {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/order",
            name:"Orders",
            icon:<FaShoppingCart/>
        },
        {
            path:"/customer",
            name:"Customer",
            icon:<FaUserAlt/>
        },
        {
            path:"/transaction",
            name:"Transaction",
            icon:<FaMoneyBillWaveAlt/>
        }
       
    ]
    return(
        
        <>
    
    <div className='section'>
                     
          
           <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
               <h1 style={{display: isOpen ? "flex" : "none", marginLeft: isOpen ? "6px" : "0px"}} className="log">GB</h1>
                   <h1 style={{display: isOpen ? "flex" : "none", marginLeft: isOpen ? "6px" : "0px"}} className="logo2">Admin <br></br> Supplier</h1>
                   <div style={{marginLeft: isOpen ? "36px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
          <div className='bar'> 

           <div className='nav-bar'>
                    <div className='logo'>
                    <h1>GB</h1>
                    <p>GreenBanda</p>
    
                    </div>
              
    
                    <div >
                        <Link className='nav-link' to="/">Home</Link>
                    </div>
                    <div>
                
                        <Link className='nav-link' to="/signup">SignUp</Link>
                    </div>
                    <div>
                        
                        <Link className='nav-link' to="/login">LogIn</Link>
                    </div>
                    <div>
                        
                        <Link className='nav-link' to="/dashboard">Dashboard</Link>
                    </div>        
    
            </div> <br></br>
          
            <div className='comment'>Customer</div>            
        </div> 
          </div>
        </div>

  
 </>
        
              
    )
};
export default About;

