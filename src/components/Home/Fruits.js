import './Home.css';
import { React, useState } from 'react'
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


function Fruits() {

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
                <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Apples</h1> */}
            </div>
          </div>    
              

           
                <Link className='all-vegetables-link' to="/login">
                <img className='vegetable-category' src={apples} alt="Market" width="100%" height="564vh"/> 

                    </Link>
                    <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Avocado</h1> */}

            </div>
          </div> 
                 
                       <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={avocado} alt="Market" width="100%" height="564vh"/>   

                    </Link> 

            <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Bananas</h1> */}

            </div>
          </div> 
           
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={banana} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
                    <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Coconuts</h1> */}

            </div>
          </div>
             
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={coconut} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
               

                </div>

                <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Guavas</h1> */}

             <div className='counter_name'> 
              <h1>Apples  <span>234Ksh /=</span></h1>

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
              <h1>Avocado  <span>234Ksh /=</span></h1>

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
              <h1>Banana<span>234Ksh /=</span></h1>

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
              <h1>Coconut  <span>234Ksh /=</span></h1>

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
                <h4>More Products</h4>
                <div className='all-vegetables'>
              
                <Link className='all-vegetables-link' to="/login">
                <img className='vegetable-category' src={guava} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                         
               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Oranges</h1> */}

            </div>
          </div> 
             
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={oranges} alt="Market" width="100%" height="564vh"/>   
                    
                    </Link> 
                    <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Passion</h1> */}

            </div>
          </div>   
              
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={passion} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
                    <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Pears</h1> */}

            </div>
          </div>  
              
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={pears} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
                
   
                   </div>

                   <div className="vegetatble-desciption-img">
                   <div className="vegetatble-desciption">
             <div className='counter_name'> 
              <h1>Guava  <span>234Ksh /=</span></h1>

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
              {/* <h1>Strawberries</h1> */}

             <div className='counter_name'> 
              <h1>Oranges  <span>234Ksh /=</span></h1>

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
              <h1>Passion  <span>234Ksh /=</span></h1>

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
              <h1>Pears  <span>234Ksh /=</span></h1>

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
                   <div className='all-vegetables'>
            
                   <Link className='all-vegetables-link' to="/login">
                   <img className='vegetable-category' src={strawberry} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>
                    
               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Watermelon</h1> */}

            </div>
          </div> 
            
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={watermelon} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
                    <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Mangoes</h1> */}

            </div>
          </div> 
            
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={mangoes} alt="Market" width="100%" height="564vh"/>   
                    
                    </Link>
                    <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              {/* <h1>Pineapples</h1> */}

            </div>
          </div> 
                    <Link className='all-vegetables-link' to="/login">    </Link> 
               

             <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={pineapple} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
   
                   </div>
                   <div className="vegetatble-desciption-img">
                   <div className="vegetatble-desciption">
             <div className='counter_name'> 
              <h1>Strawberry  <span>234Ksh /=</span></h1>

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
              <h1>Watermelon  <span>234Ksh /=</span></h1>

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
              <h1>Mangoes  <span>234Ksh /=</span></h1>

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
              <h1>Pineapple  <span>234Ksh /=</span></h1>

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
                  
                   <div className='all-vegetables'>
             
               
                   <Link className='all-vegetables-link' to="/login">
                   <img className='vegetable-category' src={dates} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    <div className="vegetatble-desciption-img">
            {/* <div className="vegetatble-desciption">
              <h1></h1>

            </div> */}
          </div> 
           
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={plums} alt="Market" width="100%" height="564vh"/>   
                    
                    </Link> 
                    <div className="vegetatble-desciption-img">
            {/* <div className="vegetatble-desciption">
               <h1>Cherries</h1>

            </div> */}
          </div> 
              
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={cherry} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
                    <div className="vegetatble-desciption-img">
            {/* <div className="vegetatble-desciption">
               <h1>Grapes</h1> 
            </div> */}
          </div> 
            
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={grapes} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
            
             
               
              
   
                   </div>
                   <div className="vegetatble-desciption-img">
                   <div className="vegetatble-desciption">
             <div className='counter_name'> 
              <h1>Dates  <span>234Ksh /=</span></h1>

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
              <h1>Plums  <span>234Ksh /=</span></h1>

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
              <h1>Cherries  <span>234Ksh /=</span></h1>

             </div>
         
              <div className="counter">
             
    
      <div className="btn__container">
     
      <button className="reset" onClick={reset}>Start</button>
      <button className="control__btn" onClick={decrease}>-</button>
        <button className="control__btn" onClick={increase}>+</button>
        <div className="counter__output">{counter}</div>
        if{
          
        }
      </div>
    </div>
            </div>
            <div className="vegetatble-desciption">
             <div className='counter_name'> 
              <h1>Grapes  <span>234Ksh /=</span></h1>

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
              </div>

            <Footer/>
        </div>
      
      )
  
      };
export default Fruits;
