import './Home.css';
import './App.js'
import { Link } from 'react-router-dom';



function Home() {
    return(
       

        
        <div className='body'>
            <div className='nav'>
                <div className='logo'>
                <h1>GB</h1>
                <p>GreenBanda</p>

                </div>
          

                <div >
                    <Link className='nav-link' to="/">Home</Link>
                </div>
                <div>
            
                    <Link className='nav-link' to="/signup">SignUp</Link>
                </div>
                <div>
                    
                    <Link className='nav-link' to="/login">LogIn</Link>
                </div>
                <div>
                    
                    <Link className='nav-link' to="/dashboard">Dashboard</Link>
                </div>
            </div>
       

        </div>
       
       
        

          
       
      
    )
};
export default Home;