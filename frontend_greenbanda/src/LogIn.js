import './LogIn.css';
import './App.js';
import {Link } from "react-router-dom";
// import { useState,useEffect } from 'react';
import {FaShoppingCart} from "react-icons/fa";
import React  from 'react';




function LogIn() {
    // const  [PhoneNumber, setphoneNumber]= useState('');
    // const  [password, setPassword]= useState('');



    return(
        <>
    
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
                  
                  <Link className='nav-link' to="/login"><FaShoppingCart/>
</Link>
              </div>
              </div>
                     

        </div>
        
        
        <div className='original'>
            <div className='sub-original'>
                <form>
                    <h1>LogIn</h1>
                    <label className='number'>Phone Number</label><br></br>
                    <input className='input' type="phonenumber" placeholder="Enter Phone Number"></input><br></br>

                    <label className='number'>Password</label><br></br>
                    <input className='input' type="password" placeholder="Enter Password"></input><br></br>
                   
                     <div className='account'>
                    <p>Forgot Password?
                    <Link id='spa' to="./login">Password</Link>
                    </p>
                    </div>
                    

                    <Link exact to="/dashboard">
        <button className='btn-signup' type='button'>Log In</button>
 </Link>
 <div className='account2'>
                    <p>Don't Have an Account?
                    <Link id='spa' to="./signup">Sign Up</Link>
                    </p>
                    </div>
 

          
                </form>


            </div>
            <div className='sub-originals'>
                <h1 className='heading'>Continue Ordering</h1>
            </div>
        </div>
        </div>
 
  
  </>
          
       
      
    )
};
export default LogIn;

