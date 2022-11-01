import './Home.css';
import Categories from './categories_image';
import Footer from './Footer';
import market from "../image/market.jpg";
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
    return(
       


        <div className='body'>
             <div className='Opacity-category'></div>
            <Navbar/> 
            <Categories/>
            <div className='categories'>
                    <h4>Recommended Products</h4>
                <div className='all-vegetables'>
                <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Apples</h1>
            </div>
          </div>

            <img className='vegetable-category' src={apples} alt="Market" width="%" height=""/>

            <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Avocado</h1>
            </div>
          </div> 
            <img className='vegetable-category' src={avocado} alt="Market" width="%" height=""/> 


            <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Bananas</h1>
            </div>
          </div>  
            <img className='vegetable-category' src={banana} alt="Market" width="%" height=""/> 


            <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Coconuts</h1>
            </div>
          </div>   
            <img className='vegetable-category' src={coconut} alt="Market" width="%" height=""/> 

           

                </div>
                <h4>More Products</h4>
                <div className='all-vegetables'>
                <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Guavas</h1>
            </div>
          </div> 
               
               <img className='vegetable-category' src={guava} alt="Market" width="%" height=""/>
               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Oranges</h1>
            </div>
          </div> 
               <img className='vegetable-category' src={oranges} alt="Market" width="%" height=""/>
               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Passion</h1>
            </div>
          </div>   
               <img className='vegetable-category' src={passion} alt="Market" width="%" height=""/>
               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Pears</h1>
            </div>
          </div>    
               <img className='vegetable-category' src={pears} alt="Market" width="%" height=""/> 
   
                   </div>
                   <div className='all-vegetables'>
                   <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Strawberries</h1>
            </div>
          </div>
               
               <img className='vegetable-category' src={strawberry} alt="Market" width="%" height=""/>

               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Watermelon</h1>
            </div>
          </div> 
               <img className='vegetable-category' src={watermelon} alt="Market" width="%" height=""/>
               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Mangoes</h1>
            </div>
          </div>    
               <img className='vegetable-category' src={mangoes} alt="Market" width="%" height=""/>
               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Pineapples</h1>
            </div>
          </div>   
               <img className='vegetable-category' src={pineapple} alt="Market" width="%" height=""/> 
   
                   </div>
                   <div className='all-vegetables'>
                   <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Dates</h1>
            </div>
          </div>
               
               <img className='vegetable-category' src={dates} alt="Market" width="%" height=""/>
               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Plums</h1>
            </div>
          </div> 
               <img className='vegetable-category' src={plums} alt="Market" width="%" height=""/>
               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Cherries</h1>
            </div>
          </div>   
               <img className='vegetable-category' src={cherry} alt="Market" width="%" height=""/>
               <div className="vegetatble-desciption-img">
            <div className="vegetatble-desciption">
              <h1>Grapes</h1>
            </div>
          </div>    
               <img className='vegetable-category' src={grapes} alt="Market" width="%" height=""/>
              
   
                   </div>
              </div>

            <Footer/>
   
       

        </div>
       
       
        

          
       
      
    )
};
export default Fruits;
