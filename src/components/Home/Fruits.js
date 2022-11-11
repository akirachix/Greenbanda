import "./Categories.css";
import { React, } from 'react'
import { Link, } from "react-router-dom";
import Categories from './categories_image';
import Footer from './Footer';
import Navbar from "../Home/Navbar";
import apples from "../image/apples.jpg";
import avocado from "../image/avocado.jpg";
import banana from "../image/banana.webp";
import coconut from "../image/coconut.jpg";
import guava from "../image/guava.jpg";
import oranges from "../image/oranges.jpeg";
import passion from "../image/passion.jpg";
import pears from "../image/pears.jpg";
import watermelon from "../image/watermelon.jpeg";
import strawberry from "../image/strawberry.jpg";
import mangoes from "../image/mangoes.jpg";
import pineapple from "../image/pineapple.webp";
import dates from "../image/dates.jpg";
import plums from "../image/plums.jpg";
import cherry from "../image/cherry.webp";
import grapes from "../image/grapes.jpg";


function Fruits({ children }) {
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
                <img className='vegetable-category' src={apples} alt="Market" width="100%" height="564vh"/> 

                    </Link>
                 
                       <Link className='all-vegetables-link' to="/cart">
                    <img className='vegetable-category' src={avocado} alt="Market" width="100%" height="564vh"/>   

                    </Link> 

           
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={banana} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
             
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={coconut} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
               

                </div>

                <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
             <div className='counter-name'> 
              <h1>Apples </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
         
            </div>
         
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Avocados </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
         
           
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Banana </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

<button className="cart-btn" >Add to Cart</button>
</Link>

             </div>
         
          
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Coconut </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
         
            </div>
          </div>
                <h4>More Products</h4>
                <div className='all-vegetables'>
              
                <Link className='all-vegetables-link' to="/login">
                <img className='vegetable-category' src={guava} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
             
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={oranges} alt="Market" width="100%" height="564vh"/>   
                    
                    </Link> 
              
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={passion} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
              
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={pears} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
                
   
                   </div>

                   <div className="vegetatble-desciption-img">
                   <div className="vegetatble-desciption">
                   <div className='counter-name'> 
              <h1>Guava </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

<button className="cart-btn" >Add to Cart</button>
</Link>

             </div>
         
           
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Orange </h1>
              <h1>234Ksh /=</h1>
              <button className="cart-btn" >Add to Cart</button>

             </div>
         
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Passion </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
         
            </div>
            <div className="vegetatble-desciption">
             <div className='counter-name'> 
              <h1>Pears </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
         
            
            </div>
          </div> 
                   <div className='all-vegetables'>
            
                   <Link className='all-vegetables-link' to="/login">
                   <img className='vegetable-category' src={strawberry} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>
                    
            
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={watermelon} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
            
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={mangoes} alt="Market" width="100%" height="564vh"/>   
                    
                    </Link>
             <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={pineapple} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
   
                   </div>
                   <div className="vegetatble-desciption-img">
                   <div className="vegetatble-desciption">
                   <div className='counter-name'> 
              <h1>Strawberry </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

<button className="cart-btn" >Add to Cart</button>
</Link>
             </div>
         
          
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Watermelon </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

<button className="cart-btn" >Add to Cart</button>
</Link>

             </div>
         
           
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Mangoes </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
         
          
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Pineapple </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
         
         
            </div>
          </div>
                  
                   <div className='all-vegetables'>
             
               
                   <Link className='all-vegetables-link' to="/login">
                   <img className='vegetable-category' src={dates} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
           
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={plums} alt="Market" width="100%" height="564vh"/>   
                    
                    </Link> 
              
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={cherry} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
            
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={grapes} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
            
             
               
              
   
                   </div>
                   <div className="vegetatble-desciption-img">
                   <div className="vegetatble-desciption">
                   <div className='counter-name'> 
              <h1>Dates </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

              <button className="cart-btn" >Add to Cart</button>
              </Link>

             </div>
         
           
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Plums </h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

<button className="cart-btn" >Add to Cart</button>
</Link>

             </div>
         
           
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Cherries</h1>
              <h1>234Ksh /=</h1>
              <Link to="/cart">

<button className="cart-btn" >Add to Cart</button>
</Link>

             </div>
         
          
            </div>
            <div className="vegetatble-desciption">
            <div className='counter-name'> 
              <h1>Grapes </h1>
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
export default Fruits;
