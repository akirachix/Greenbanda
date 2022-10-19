import './LogIn.css';
import '../App.js';
import {Link } from "react-router-dom";
import { useState,useEffect } from 'react';


function LogIn() {
    const  [PhoneNumber, setphoneNumber]= useState('');
    const  [password, setPassword]= useState('');



    return(
        <>
    
    <div className='body'>
            <div className='nav'>
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