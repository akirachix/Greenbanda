import './LogIn.css';
import {Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import axios  from 'axios';
import Footer from '../Home/Footer';



function LogIn({ children }) {

    const  [errorMessage, setError]= useState('');
    const  [PhoneNumber, setphoneNumber]= useState('');
    const  [password, setPassword]= useState('');
    
    const Vendor={
      phone_number:"",
      password:""
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError('')
        setphoneNumber('') 
        setPassword('')
        console.log( PhoneNumber, password)
      
      };

       
  useEffect(()=>{
    setError('');
  }, [password, PhoneNumber]
  );
const postdata = () =>{
    Vendor.phone_number = PhoneNumber
    Vendor.password = password
 

  

  console.log(Vendor)
  axios.post('http://127.0.0.1:8000/Bandapp/Login/',Vendor)
  .then(res =>{
    console.log(res)
  })
  .catch(error =>{
    console.log(error)
  })

}



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
              <Link className='nav-link' to="/cart">Cart</Link>
                 
              </div>
              </div>
                     

        </div>
        
        
        <div className='original'>
        { children }
        <p className ={errorMessage? "errormessage": "offscreen" }
         aria-live="assertive">
          {errorMessage}
           </p>
            <div className='sub-original'>
                <form onSubmit={handleSubmit}>
                    <h1>LogIn</h1>
                    <label className='number'>Phone Number</label><br></br>
                    <input className='input'  
                    required
                    value={PhoneNumber}
                    autoComplete= "off"
                    onChange={(e)=> {setphoneNumber(e.target.value)}}
                    type="int" 
                    placeholder="Enter Phone Number"></input><br></br>

                    <label className='number'>Password</label><br></br>
                    <input className='input'
                    required 
                    type="password" 
                    value={password}
                    autoComplete= "off"
                    onChange={(e)=> {setPassword(e.target.value)}}
                    placeholder="Enter Password"></input><br></br>
                   
                     <div className='account'>
                    <p>Forgot Password?
                    <Link id='spa' to="./login">Password</Link>
                    </p>
                    </div>
                    

                    <Link exact to="/delivery">
        <button className='btn-signup'  type='button' onClick={postdata} disabled={!password}>Log In</button>
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
        <Footer/>
        </div>
 
  
  </>
          
       
      
    )
};
export default LogIn;

