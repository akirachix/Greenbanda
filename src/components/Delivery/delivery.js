import './delivery.css';

import Navbar from "../Home/Navbar";

import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';




function Delivery({ children }) {
    return(
       <div>
        <Navbar/>
        { children }
        <div className='delivery-details'>
            <div className='delivery-box'>
                <form>
                    <div className='delivery-header'>Delivery Details</div>
                    <div className='delivery-input'>
                        <input type="text" placeholder='Enter Phone Number'></input>
                        <input type="text" placeholder='Enter Location'></input> 
                        <input type="text" placeholder='Enter Estimated Arrival time'></input>
                        
                    </div>
                    <div className='delivery-btn'>

                        <Link to="/edit">
                        <button type='button'>Edit</button>
                        </Link>

                        <Link to="/payment">
                        
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
export default Delivery;