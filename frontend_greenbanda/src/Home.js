import './Home.css';
import './App.js';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import  { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa"



function Home() {
    return(
       

        
        <div className='body'>
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
                    
                    <Link className='nav-link' to="/login">            <FaShoppingCart/>
</Link>
                </div>
                </div>
               
            </div>
       

        </div>
       
       
        

          
       
      
    )
};
export default Home;