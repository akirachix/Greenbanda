import './cart.css';
import { Link, } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from '../Home/Footer';
import apples from "../image/apples.jpg";
import { React, useState } from 'react'






function Cart({ children }) {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);
    const [total, setTotal] = useState(0);
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
    setNumber(number => number + 234);
    setTotal(total => total+262);

   
  };
 
  //decrease counter
  const decrease = () => {
       if (counter > 0) {
      setCounter(count => count - 1);
      setNumber(number => number - 1);
      setNumber(total => total - 1);
    }
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
    setNumber(0)
    setTotal(0)
  }

    return(
       


        <div className='cart-body'>
            { children }
         
            <Navbar/>
            <div className='box-flex'>
           
            <div className='cart-all-vegetables-body'>
          


            <div className='cart-all-vegetables'>
                
              

           
              <Link className='cart-all-vegetables-link' to="/login">
              <img className='vegetable-category' src={apples} alt="Market" width="100%" height="564vh"/> 

                  </Link>
                 
               
                 

         
           
                  
             
             

              </div>
              <div className="cart-vegetatble-desciption">
             <div className='counter-name'> 
              <h1>Apples </h1>
              <h1>234Ksh /=</h1>
              <button className="cart-btn" >Add to Cart</button>

             </div>
             
         
            </div>
            
            
         
            </div>
            <div className='cart-box'>
            <h1>Cart Items</h1>
            <div className="counter">
             
    
             <div className="btn-container">
            
             <button className="reset" onClick={reset}>Start</button>
             <button className="control-btn" onClick={decrease}>-</button>
               <button className="control-btn" onClick={increase}>+</button>
             
             
               
              
             </div>
           </div>
           
                    <form  className="coninued-payment-form">
                        
        <table className="coninued-payment-table">
          <thead>
           
          

            <tr>
              <td>Items</td>
              <td>  <div className="counter-output">{counter}</div></td>
              
                           
            </tr>
            <tr>
              <td>Sub Total</td>
              <td>  <div className="counter-output">{number}</div></td>
              
                           
            </tr>
            <tr>
              <td>Delivery Change</td>
              <td>Ksh28</td>
              
                           
            </tr>
            <tr>
              <td>Total</td>
              <td>  <div className="counter-output">{total}</div></td>
              
                           
            </tr>
            

            
          </thead>
         
        </table>
      </form>
      <div>
        <Link to="/login">
        
        <button className='cart-button' type='button'> Next</button></Link>
      </div>

                 
</div>



</div>
      
           
           
              
            

           
       

            <Footer/> 
       

        </div>
       
       
        

          
       
      
    )
};
export default Cart;