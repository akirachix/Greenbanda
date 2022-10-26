import React from 'react';
// import {  Link } from "react-router-dom";
import './nav.css'
import { icons } from 'react-icons';
import {FaShoppingCart} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const NavBar = () => {
  
  return (
  <>
    <Navbar variant='light' fixed='top' bg="light" expand="lg">  
    <Container>  
      <Navbar.Brand href="#home" style={{'color':'green'}}><b>GB</b>GreenBanda</Navbar.Brand> 
     
 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
     
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="ms-auto">  
          <Nav.Link href="/">Home</Nav.Link>  
          <Nav.Link href="/Vegetables">Vegetables</Nav.Link>  
          <Nav.Link href="/Fruits">Fruits</Nav.Link>  
          <Nav.Link href="/Login">Login</Nav.Link> 
          <Nav.Link href="/Login"> <FaShoppingCart/>  </Nav.Link> 
         
        </Nav>  
      </Navbar.Collapse>
      </Container>    
  </Navbar>
  </>
            


 );
}
export default NavBar;























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
