import './SignUp.css';
import { Link, } from "react-router-dom";
import React from 'react';
import { useState,useEffect } from 'react';
import axios  from 'axios';
import Footer from '../Home/Footer';



  

function SignUp({ children }) { 




  const  [errorMessage, setError]= useState('');
  const  [FirstName, setFirstName]= useState('');
  const  [LastName, setLastName]= useState('');
  const  [password, setPassword]= useState('');
  const  [Location, setLocation]= useState('');
  const  [PhoneNumber, setphoneNumber]= useState('');
  const  [Confirmpassword, setConfirmpassword]= useState('');
  const Supplier={
    first_name:"",
    last_name:"",
    location:"",
    phone_number:"",
    password:""
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setError('')
    setFirstName('') 
    setLastName('')
    setphoneNumber('')
    setPassword('')
    setConfirmpassword('')
    console.log( FirstName, LastName, Location,Confirmpassword,password,PhoneNumber)
  
  };

  
  useEffect(()=>{
    setError('');
  }, [LastName, password, Confirmpassword, PhoneNumber, FirstName,Location]
  );
const postdata = () =>{
  Supplier.first_name = FirstName
  Supplier.last_name = LastName
  Supplier.location = Location
  Supplier.phone_number = PhoneNumber
  Supplier.password = password
 

  

  console.log(Supplier)
  axios.post('https://boiling-citadel-73149.herokuapp.com/Bandapp/Supplier/',Supplier)
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
   
      <section>
      { children }
        <p className ={errorMessage? "errormessage": "offscreen" }
         aria-live="assertive">
          {errorMessage}
           </p>
    <div className="main">
      
      <div className='sub-main'>  
         
        <div>

        <form className='register-form'  onSubmit={handleSubmit} >
            <h1 >Sign Up</h1>
            <div className='form'>

            </div>

            <label className='name'>First Name</label> <br></br>
            <input name='first_name' 
            type="text"
            required
            // ref={userRef}
            value={FirstName}
            autoComplete= "off"
            onChange={(e)=> {setFirstName(e.target.value)}}
             placeholder="Enter First Name">
              </input><br></br>

            <label className='name'>Last Name</label> <br></br>
            <input name='last_name'
             type="text" 
             required
             value={LastName}
            //  ref={userRef}
             autoComplete= "off"
             onChange={(e)=> {setLastName(e.target.value)}}
             placeholder="Enter Last Name"></input><br></br>

            <label className='name'>Phone Number</label> <br></br>
            <input name='phone_number'
             required
             value={PhoneNumber}
            //  ref={userRef}
             autoComplete= "off"
             onChange={(e)=> {setphoneNumber(e.target.value)}}
             type="int" 
            placeholder="Enter PhoneNumber"></input> <br></br>

            <label className='name'>Location</label> <br></br>
            <input name='location' 
             required
             value={Location}
            //  ref={userRef}
             autoComplete= "off"
             onChange={(e)=> {setLocation(e.target.value)}}
            type="text" 
            placeholder="Enter Location"></input><br></br>
            
            <label className='name'>Password</label> <br></br>
            <input name='password' type="Password"
             placeholder="Enter Password"
             required
            //  ref={userRef}
             value={password}
             autoComplete= "off"
             onChange={(e)=> {setPassword(e.target.value)}}
             ></input><br></br>

            <label className='name'>Confirm Password</label> <br></br>
            <input name='confirm_password' 
            type="Password"
            required
            value={Confirmpassword}
            // ref={userRef}
            autoComplete= "off"
            onChange={(e)=> {setConfirmpassword(e.target.value)}}
             placeholder="Enter Confirm Password"></input>
            <br></br>
            <br></br>
            <div className='account'>
                    <p id ="span2" >Alreadly have an account?
                    <Link id='spa' exact={true} to="/login">Log In</Link>
                    </p>
                    
                    
                    
        </div>
            <div >
        <Link to="/dashboard">
        <button  type='button' onClick={postdata} disabled={!Confirmpassword}  className='btn-signup'>Sign Up</button>
 </Link>
        </div>
 
        </form>
        <div>
          
        
 
        
        </div>
    
     </div>
     
    </div>
    <div className='sub-main2'>
      <h1 className='welcoming'> Welcome <br></br> to GreenBanda</h1>
      </div>
    </div>
    </section>
    <Footer/>
    </div>
 
  
  </>
  )
}
 

export default SignUp;