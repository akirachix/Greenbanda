import { React, useState } from 'react'
import "./Home.css";
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



function Vegetables() {

  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  // const [seter, setSeter] = useState(0);
  // const [items, setItems] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
    setNumber(number => number + 1);
   
  };
 
  //decrease counter
  const decrease = () => {
       if (counter > 0) {
      setCounter(count => count - 1);
      setNumber(number => number - 1);
    }
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
    setNumber(0)
  }
    return(
       


        <div className='body'>
             <div className='Opacity-category'></div>
             <div>
                <input className='category-Search' placeholder='Search'></input>
              </div>

            <Navbar/> 
              <Categories/>
              <div className='categories'>
                    <h4>Recommended Products</h4>
                  
                <div className='all-vegetables'>

                
          

               
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={capsicum} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>
               
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={cabbages} alt="Market" width="100%" height="564vh"/>  
                    
                    </Link>
                    

                   
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={carrots} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link>
                
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={cucumber} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>             
            

               
                </div>
                <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Guavas</h1> */}

             <div className='counter_name'> 
              <h1>Capsicum <span>250Ksh /=</span></h1>

             </div>
         
              <div className="counter">
             
    
      <div className="btn__container">
     
      <button className="reset" onClick={reset}>Start</button>
      <button className="control__btn" onClick={decrease}>-</button>
        <button className="control__btn" onClick={increase}>+</button>
        <div className="counter__output">{counter}</div>
      
        
       
      </div>
    </div>
            </div>
         
            <div className="vegetatble-desciption">
             <div className='counter_name'> 
              <h1>cabbages <span>300Ksh /=</span></h1>

             </div>
         
              <div className="counter">
             
    
      <div className="btn__container">
     
      <button className="reset" onClick={reset}>Start</button>
      <button className="control__btn" onClick={decrease}>-</button>
        <button className="control__btn" onClick={increase}>+</button>
        <div className="counter__output">{number}</div>
      
        
       
      </div>
    </div>
            </div>
            <div className="vegetatble-desciption">
             <div className='counter_name'> 
              <h1>carrots<span>200Ksh /=</span></h1>

             </div>
         
              <div className="counter">
             
    
      <div className="btn__container">
     
      <button className="reset" onClick={reset}>Start</button>
      <button className="control__btn" onClick={decrease}>-</button>
        <button className="control__btn" onClick={increase}>+</button>
        <div className="counter__output">{counter}</div>
      
        
       
      </div>
    </div>
            </div>
            <div className="vegetatble-desciption">
             <div className='counter_name'> 
              <h1>cucumber <span>250Ksh /=</span></h1>

             </div>
         
              <div className="counter">
             
    
      <div className="btn__container">
     
      <button className="reset" onClick={reset}>Start</button>
      <button className="control__btn" onClick={decrease}>-</button>
        <button className="control__btn" onClick={increase}>+</button>
        <div className="counter__output">{counter}</div>
      
        
       
      </div>
    </div>
            </div>
          </div>
                <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Capsicum</h1>
            </div>

            <div className="vegetatble-desciption">
              <h1>cabbages</h1>
            </div>
            <div className="vegetatble-desciption">
              <h1>carrots</h1>
            </div> <div className="vegetatble-desciption">
              <h1>cucumber</h1>
            </div>
          </div>
                <h4>More Products</h4>
                <div className='all-vegetables'>
              
                <Link className='all-vegetables-link' to="/login">
                <img className='vegetable-category' src={eggplant} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={garlic} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link>
                  
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={irish} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
              
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={Kunde} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
             
   
                   </div>
                   <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Eggplant</h1>
            </div>

            <div className="vegetatble-desciption">
              <h1>Garlic</h1>
            </div>
            <div className="vegetatble-desciption">
              <h1>irish Potatoes</h1>
            </div> <div className="vegetatble-desciption">
              <h1>Cow pea leaves</h1>
            </div>
          </div>
                   <div className='all-vegetables'>
               
                   <Link className='all-vegetables-link' to="/login">
                   <img className='vegetable-category' src={onions} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>
              
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={spinach} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link>
            
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={tomatoes} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 

              
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={SweetPotatoes} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
               
   
                   </div>
                   <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>onions</h1>
            </div>

            <div className="vegetatble-desciption">
              <h1>Spinach</h1>
            </div>
            <div className="vegetatble-desciption">
              <h1>Tomatoes</h1>
            </div> <div className="vegetatble-desciption">
              <h1>SweetPotatoes</h1>
            </div>
          </div>
                   <div className='all-vegetables'>
                
                   <Link className='all-vegetables-link' to="/login">
                   <img className='vegetable-category' src={brocoli} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
              
           
        
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={turnips} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 

                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={pumpkins} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
               
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={collardgreens} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    </div>
                    <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Brocoli</h1>
            </div>

            <div className="vegetatble-desciption">
              <h1>Turnips</h1>
            </div>
            <div className="vegetatble-desciption">
              <h1>Pumpkin</h1>
            </div> <div className="vegetatble-desciption">
              <h1>Collard Greens</h1>
            </div>
          </div>
               
               
   
                  
              </div>

            <Footer/>

        </div>      
      
    )
};
export default Vegetables;
          

         
