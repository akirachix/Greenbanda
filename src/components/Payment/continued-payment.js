import './continued-payment.css';

import Navbar from "../Home/Navbar";

import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';




function ContinuedPayment({ children }) {
    return(
       <div>
        <Navbar/>
        <div className='continued-payment-details'>
        { children }
            <div className='continued-payment-box'>
                <form>
                    <div className='continued-payment-header'>Payment</div>
                    
                    
                    <div className='continued-payment-input' >
                        <h3>M-Pesa</h3>
                       

                        <input type="text" placeholder='Enter Phone Number'></input>

              
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