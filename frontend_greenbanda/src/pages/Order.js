import React, { useState } from 'react';

import '../App.css'
import {Link, NavLink } from 'react-router-dom';
import {   FaTh,
    FaBars,
    FaUserAlt,
    FaShoppingCart,
    FaMoneyBillWaveAlt,
    FaShoppingBag,
    FaBell,
    FaUserCircle
} from "react-icons/fa"



function Comment ({children}) {
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
               <h1 style={{display: isOpen ? "flex" : "none", marginLeft: isOpen ? "6px" : "0px"}} >
               <Link  className="log" to="./">GB</Link>
               </h1>
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
           <input className='search-input'  type="text" placeholder="Search..."/>
           <div className='icons'>

            <h4><FaBell/></h4>
            <h4><FaUserCircle/></h4>
            </div>


    
            </div> <br></br>
          
            <div className='sect-main'>Orders Page</div>            
        </div> 
          </div>
        </div>
                    
   
 </>
        
              
    )
};
export default Comment;

