import './Home.css';
import market from "../image/market.jpg"
import Footer
 from './Footer';
import Navbar from "../Home/Navbar";



function Fruits() {
    return(
       


        <div className='body'>
            <Navbar/> 
            <img src={market} alt="Market" width="100%" height="700vh"/> 

            <Footer/>
   
       

        </div>
       
       
        

          
       
      
    )
};
export default Fruits;
