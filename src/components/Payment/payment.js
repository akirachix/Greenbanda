import './payment.css';

import Navbar from "../Home/Navbar";

import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';




function Payment() {
    return(
       <div>
        <Navbar/>
        <div className='payment-details'>
            <div className='payment-box'>
                <form>
                    <div className='payment-header'>Payment</div>
                    
                    
                    <div className='payment-input' >
                        <h3>Mode Of Payment</h3>
                        <div className='payment-check'>

                        <label for="vehicle1"> M-Pesa</label> <br></br>
                        <input type="checkbox"></input>
                        </div>

                        <div className='payment-check'>

                        <label for="vehicle1"> Cash On Delivery</label> <br></br>
                        <input type="checkbox"></input>
                        </div>
                        
                        
                    </div>
                    <div className='payment-btn'>

                        
                        <Link to="/continuedpayment">
                        
                        <button type='button'>Send</button>
                        </Link>

                      

                    </div>
                </form>

            </div>

        </div>
       <Footer/>
       </div>


            

            

       

     
       
       
        

          
       
      
    )
};
export default Payment;