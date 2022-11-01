import './Home.css';
import market from "../image/market.jpg";




function Categories() {
    return(
       


        <div className='body'>
            
          
            <img className='category-image' src={market} alt="Market" width="100%" height="700vh"/> 
              
              <div>
                <input className='category-Search' placeholder='Search'></input>
              </div>
         

        </div>      
      
    )
};
export default Categories;