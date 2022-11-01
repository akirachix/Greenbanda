import './Home.css';
import Footer from './Footer';
import Categories from './categories_image';
import market from "../image/market.jpg";
import Navbar from "../Home/Navbar";
import { Link, } from "react-router-dom";


function Vegetables() {
    return(
       


        <div className='body'>
             <div className='Opacity-category'></div>
            <Navbar/> 
              <Categories/>
              <div className='categories'>
                    <h4>Recommended Products</h4>
                <div className='all-vegetables'>
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>  
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link>             
            

                </div>
                <h4>More Products</h4>
                <div className='all-vegetables'>
                <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
             
   
                   </div>
                   <div className='all-vegetables'>
                   <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
               
   
                   </div>
                   <div className='all-vegetables'>
                   <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
                    <Link className='all-vegetables-link' to="/login">
            <img className='vegetable-category' src={market} alt="Market" width="100%" height="564vh"/> 
                    
                    </Link> 
               
               
   
                   </div>
              </div>

            <Footer/>

        </div>      
      
    )
};
export default Vegetables;