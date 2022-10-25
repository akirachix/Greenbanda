import React from 'react';
import {  Link } from "react-router-dom";
import './nav.css'
// import { icons } from 'react-icons';
import {FaShoppingCart} from 'react-icons/fa';


const Navbar= () =>{
  return (
  <div className='links'>
    <div className='navlogo'>
      <h1 className='logo'>GB <span>GreenBanda</span></h1>
     
    </div>
    <div className='navi' >
              
          

              <div>
              <Link className='one' id='one' to="/">Home</Link>
              </div>
              <div >
              <Link className='one' id='one' to="/vegetables">Vegetables</Link>
              </div>
              <div >
              <Link className='one' id='one' to="/fruits">Fruits</Link>
              </div>
              
              <div>
                  
              <Link className='one'id='one' to="/login">LogIn</Link>
              </div>

              <div>
                  <Link className='nav-link' id='one' to="/login">  
                  <div className='fa'>
                      <FaShoppingCart/>
                    </div>     
</Link>
              </div>
              </div>

    
  
  </div>
 );
}
export default Navbar;























// import React from "react";
// import {Link} from 'react-router-dom';

// function Nav() {
//   return (
//     <div className="Nav">
//       <div className="Navbar"  style={{ backgroundColor: "#2FC85A" }} variant="#2FC85A">
//         <div className="Container">
//           {/* <Link href="/">Navbar</Link> */}
//           <Link className="me-auto" style={{ marginLeft: "70%" }}>
//             <Link href="/" style={{ color: "white" }}>
//               Home
//             </Link>
//             <Link href="/Fruits" style={{ color: "white" }}>
//               Fruits
//             </Link>
//             <Link href="/Vegetables" style={{ color: "white" }}>
//               Vegetables
//             </Link>
//             <Link href="/Vegetables" style={{ color: "white" }}>
//               Log In
//             </Link>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Nav
