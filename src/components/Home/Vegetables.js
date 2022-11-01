import './Home.css';
import Footer from './Footer';
import Categories from './categories_image';
import market from "../image/market.jpg";
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
    return(
       


        <div className='body'>
             <div className='Opacity-category'></div>
            <Navbar/> 
              <Categories/>
              <div className='categories'>
                    <h4>Recommended Products</h4>
                <div className='all-vegetables'>

            <img className='vegetable-category' src={capsicum} alt="Market" width="%" height=""/> 
            <img className='vegetable-category' src={cabbages} alt="Market" width="%" height=""/>  
            <img className='vegetable-category' src={carrots} alt="Market" width="%" height=""/>    
            <img className='vegetable-category' src={cucumber} alt="Market" width="%" height=""/> 
               
            

                </div>
                <h4>More Products</h4>
                <div className='all-vegetables'>
               
               <img className='vegetable-category' src={eggplant} alt="Market" width="%" height=""/> 
               <img className='vegetable-category' src={garlic} alt="Market" width="%" height=""/>    
               <img className='vegetable-category' src={irish} alt="Market" width="%" height=""/>    
               <img className='vegetable-category' src={Kunde} alt="Market" width="%" height=""/> 
   
                   </div>
                   <div className='all-vegetables'>
               
               <img className='vegetable-category' src={onions} alt="Market" width="%" height=""/> 
               <img className='vegetable-category' src={spinach} alt="Market" width="%" height=""/>    
               <img className='vegetable-category' src={tomatoes} alt="Market" width="%" height=""/>    
               <img className='vegetable-category' src={SweetPotatoes} alt="Market" width="%" height=""/> 
   
                   </div>
                   <div className='all-vegetables'>
               
               <img className='vegetable-category' src={brocoli} alt="Market" width="%" height=""/> 
               <img className='vegetable-category' src={turnips} alt="Market" width="%" height=""/>    
               <img className='vegetable-category' src={pumpkins} alt="Market" width="%" height=""/>    
               <img className='vegetable-category' src={collardgreens} alt="Market" width="%" height=""/> 
   
                   </div>
              </div>

            <Footer/>

        </div>      
      
    )
};
export default Vegetables;