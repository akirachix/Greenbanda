import './Home.css';
import market from "../image/market.jpg";




function Categories({ children }) {
    return(
       


        <div className='body'>
          { children }
         
            
          
            <img className='category-image' src={market} alt="Market" width="100%" height="700vh"/> 
              
             
         

        </div>      
      
    )
};
export default Categories;