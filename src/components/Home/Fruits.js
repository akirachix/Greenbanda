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





import { Link, } from "react-router-dom";


function Fruits() {
    return(
       


        <div className='body'>
             <div className='Opacity-category'></div>
            <Navbar/> 
            <Categories/>
            <div className='categories'>
                    <h4>Recommended Products</h4>
                <div className='all-vegetables'>

           
                <Link className='all-vegetables-link' to="/login">
                <img className='vegetable-category' src={apples} alt="Market" width="100%" height="564vh"/> 

                    </Link>   <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={avocado} alt="Market" width="100%" height="564vh"/>   

                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={banana} alt="Market" width="100%" height="564vh"/>    
                    
                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
                    <img className='vegetable-category' src={coconut} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
               

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
              </div>

            <Footer/>
   
       

        </div>
       
       
        

          
       
      
    )
};
export default Fruits;
