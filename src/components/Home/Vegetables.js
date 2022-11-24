import "./Categories.css";
import { React, } from 'react'
import Footer from "./Footer";
import { Link, } from "react-router-dom";
import Categories from "./categories_image";
import Navbar from "../Home/Navbar";
import capsicum from "../image/capsicum.jpg";
import carrots from "../image/carrots-1.jpg";
import cucumber from "../image/cucumber.jpg";
import cabbages from "../image/cabbages.webp";
import eggplant from "../image/Eggplant.webp";
import garlic from "../image/garlic.webp";
import irish from "../image/irish potatoes.webp";
import Kunde from "../image/Kunde.jpeg";
import onions from "../image/onions.jpg";
import spinach from "../image/spinach.jpg";
import SweetPotatoes from "../image/SweetPotatoes.jpeg";
import tomatoes from "../image/tomatoes.jpeg";
import brocoli from "../image/brocoli.jpeg";
import turnips from "../image/turnips.jpg";
import collardgreens from "../image/collardgreens.jpg";
import pumpkins from "../image/pumpkins.jpg";



function Vegetables({ children }) {
    return(
       


        <div className='body'>
             <div className='Opacity-category'></div>
             <div>
                <input className='category-Search' placeholder='Search'></input>
              </div>

            <Navbar/> 
              <Categories/>
              { children }
              <div className='categories'>
                    <h4>Recommended Products</h4>
                  
                <div className='all-vegetables'>

                
          

               
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={capsicum} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>
               
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={cabbages} alt="Market" width="100%" height="564vh"/>  
                    
                    </Link>
                    

                   
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={carrots} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link>
                
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={cucumber} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>             
            

               
                </div>
                <div className="vegetatble-desciption-img">
                <div className="vegetatble-desciption">
                <div className='counter-name'> 
              <h1>Capsicum </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
         
           
            </div>
           

            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Cabbages </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Carrots </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div> <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Cucumber </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div>
          </div>
                <h4>More Products</h4>
                <div className='all-vegetables'>
              
                <Link className='all-vegetables-link' to="/cart">
                <img className='vegetable-category' src={eggplant} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={garlic} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link>
                  
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={irish} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
              
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={Kunde} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
             
   
                   </div>
                   <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Eggplant </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>            </div>

            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Garlic </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Irish Potatoes </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div> <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Cow Pea Leaves </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div>
          </div>
                   <div className='all-vegetables'>
               
                   <Link className='all-vegetables-link' to="/cart">
                   <img className='vegetable-category' src={onions} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>
              
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={spinach} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link>
            
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={tomatoes} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 

              
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={SweetPotatoes} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
               
   
                   </div>
                   <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Onions </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div>

            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Spinach</h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Tomatoes</h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div> <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>SweetPotatoes </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div>
          </div>
                   <div className='all-vegetables'>
                
                   <Link className='all-vegetables-link' to="/cart">
                   <img className='vegetable-category' src={brocoli} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
              
           
        
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={turnips} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 

                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={pumpkins} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
               
                    <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={collardgreens} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    </div>
                    <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Brocoli </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div>

            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Turnips </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Pumpkins </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>            </div> <div className="vegetatble-desciption">
             <div className='counter-name'> 
              <h1>Collard Greens </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
            </div>
          </div>
               
               
   
                  
              </div>

            <Footer/>

        </div>      
      
    )
};
export default Vegetables;
          

         
