import './Home.css';
import { Link, } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Card from "../Home/cards";
import Footer from './Footer';
import market from "../image/market.jpg"



function Home() {
    return(
       


        <div className='body'>
            <div className='Opacity'></div>
            <div className='Opacity-white'></div>
            <Link to="/vegetables">
            
            <button className='home-btn'>Order Now</button>
            </Link>
            <div className='home-content'>
                <p>Fresh Vegetables and Fruits  
from your trusted Suppliers</p>
                </div> 
            <Navbar/>
            

            <img src={market} alt="Market" width="100%" height="700vh"/> 
           
            <Card/> 

            <Footer/> 
       

        </div>
       
       
        

          
       
      
    )
};
export default Home;