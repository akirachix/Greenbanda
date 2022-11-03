import './continued-payment.css';

import Navbar from "../Home/Navbar";

import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';




function ContinuedPayment() {
    return(
       <div>
        <Navbar/>
        <div className='continued-payment-details'>
            <div className='continued-payment-box'>
                <form>
                    <div className='continued-payment-header'>Payment</div>
                    
                    
                    <div className='continued-payment-input' >
                        <h3>M-Pesa</h3>
                       

                        <input type="text" placeholder='Enter Phone Number'></input>

                      
                        
                        
                        
                    </div>
                    <div className='continue-payment-cart'>
                    <form  className="coninued-payment-form">
                        <h1>Cart</h1>
        <table className="coninued-payment-table">
          <thead>
           
          

            <tr>
              <td>Items</td>
              <td>8</td>
              
                           
            </tr>
            <tr>
              <td>Sub Total</td>
              <td>Ksh20</td>
              
                           
            </tr>
            <tr>
              <td>Delivery Change</td>
              <td>Ksh28</td>
              
                           
            </tr>
            <tr>
              <td>Total</td>
              <td>Ksh59</td>
              
                           
            </tr>
            

            
          </thead>
         
        </table>
      </form>

                    </div>
                    <div className='continued-payment-btn'>

                        
                        <Link to="/orderreview">
                        
                        <button type='button'>Next</button>
                        </Link>

                      

                    </div>
                </form>

            </div>

        </div>
       <Footer/>
       </div>


            

            

       

     
       
       
        

          
       
      
    )
};
export default ContinuedPayment;