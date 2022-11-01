import './Home.css';
import Categories from './categories_image';
import Footer from './Footer';
import market from "../image/market.jpg";
import Navbar from "../Home/Navbar";



function Fruits() {
    return(
       


        <div className='body'>
             <div className='Opacity-category'></div>
            <Navbar/> 
            <Categories/>
            <div className='categories'>
                    <h4>Recommended Products</h4>
                <div className='all-vegetables'>
               
            <img className='vegetable-category' src={market} alt="Market" width="%" height=""/> 
            <img className='vegetable-category' src={market} alt="Market" width="%" height=""/>    <img className='vegetable-category' src={market} alt="Market" width="%" height=""/>    <img className='vegetable-category' src={market} alt="Market" width="%" height=""/> 

                </div>
                <h4>More Products</h4>
                <div className='all-vegetables'>
               
               <img className='vegetable-category' src={market} alt="Market" width="%" height=""/> 
               <img className='vegetable-category' src={market} alt="Market" width="%" height=""/>    <img className='vegetable-category' src={market} alt="Market" width="%" height=""/>    <img className='vegetable-category' src={market} alt="Market" width="%" height=""/> 
   
                   </div>
                   <div className='all-vegetables'>
               
               <img className='vegetable-category' src={market} alt="Market" width="%" height=""/> 
               <img className='vegetable-category' src={market} alt="Market" width="%" height=""/>    <img className='vegetable-category' src={market} alt="Market" width="%" height=""/>    <img className='vegetable-category' src={market} alt="Market" width="%" height=""/> 
   
                   </div>
                   <div className='all-vegetables'>
               
               <img className='vegetable-category' src={market} alt="Market" width="%" height=""/> 
               <img className='vegetable-category' src={market} alt="Market" width="%" height=""/>    <img className='vegetable-category' src={market} alt="Market" width="%" height=""/>    <img className='vegetable-category' src={market} alt="Market" width="%" height=""/> 
   
                   </div>
              </div>

            <Footer/>
   
       

        </div>
       
       
        

          
       
      
    )
};
export default Fruits;
