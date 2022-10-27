import React from "react";
import "./veg.css";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Navbar from "./Navbar";
import onion from "../images/onion.jpg";
import SweetPotatoes from "../images/SweetPotatoes.jpeg";
// import Spinach from "../images/spinach.webp";
import spinach from "../images/spinach.webp";
import cucumber from "../images/cucumber.jpg";
import brocoli from "../images/brocoli.jpeg";
import cabbages from "../images/cabbages.webp";
import Eggplant from "../images/Eggplant.webp";
import market from "../images/market.jpg";
import carrots from "../images/carrots-1.jpg";
import saumu from "../images/saumu.jpeg";
import tomatoes from "../images/tomatoes.jpeg";

const Vegetables = () => {
  return (
    <div>
      <Navbar />
      <div className="opacity"></div>
      <div className="market-image">
        <img src={market} height="670vh" width="100%" />
      </div>

      <div className="ser">
      <SearchBar />
      </div>
      <div className="titles">
        <h4>Recommended Vegetables</h4>
      </div>

      <div className="category">
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Onion</h4>
            </div>
          </div>

          <img src={onion} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>SweetPotatoes</h4>
            </div>
          </div>
          <img src={SweetPotatoes} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Spinach</h4>
            </div>
          </div>
          <img src={spinach} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Cucumber</h4>
            </div>
          </div>
          <img src={cucumber} height="206vh" width="100%" />
        </div>
      </div>
      <div className="titles">
        <h4>More Vegetabless</h4>
      </div>
      <div className="category">
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>brocoli</h4>
            </div>
          </div>

          <img src={brocoli} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Cabbages</h4>
            </div>
          </div>
          <img src={cabbages} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Egg plant</h4>
            </div>
          </div>
          <img src={Eggplant} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Spinach</h4>
            </div>
          </div>
          <img src={spinach} height="206vh" width="100%" />
        </div>
      </div>
      <div className="category">
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Carrots</h4>
            </div>
          </div>

          <img src={carrots} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Garlic</h4>
            </div>
          </div>
          <img src={saumu} height="206vh" width="100%" />
        </div>
        <div className="veg-category">
          <div className="sub-box">
            <div className="vegetatble-title">
              <h4>Tomatoes</h4>
            </div>
          </div>
          <img src={tomatoes} height="206vh" width="100%" />
        </div>
      </div>
      <vegetablecards />

      <Footer />
    </div>
  );
};
export default Vegetables;

{
  {



    /* 
      <div className="vegs">
        <img src={capsicum} height="12%" width="17%"/>
        <img src={saumu} height="5%" width="17%"/>
        <img src={cucumber} height="12%" width="17%"/>
        <img src={onions} height="1%" width="17%"/>
        <img src={tomatoes} height="12%" width="17%"/>
        <img src={Eggplant} height="12%" width="17%"/>
        <img src={cabbages} height="12%" width="17%"/>

      </div> */
  }

  /* <SearchBar/>
    </div>


// import React from "react";
// import "./veg.css";
// import Container from "react-bootstrap/Container";
// // import Nav from "react-bootstrap/Nav";
// // import Navbar from "react-bootstrap/Navbar";
// // import veg from "../Home/vegetables.jpg";
// import { Button, ModalFooter } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import navbar from "./Nav";

// function Veg() {
//   return (
//     <div>
//       <div>
//       <navbar/>

//         {/* <Navbar style={{ backgroundColor: "#2FC85A" }} variant="#2FC85A">
//           <Container>
//             <Navbar.Brand href="/">Navbar</Navbar.Brand>
//             <Nav className="me-auto" style={{ marginLeft: "70%" }}>
//               <Nav.Link href="/" style={{ color: "white" }}>
//                 Home
//               </Nav.Link>
//               <Nav.Link href="/Fruits" style={{ color: "white" }}>
//                 Fruits
//               </Nav.Link>
//               <Nav.Link href="/Vegetables" style={{ color: "white" }}>
//                 Vegetables
//               </Nav.Link>
//             </Nav>
//           </Container>
//         </Navbar> */
}
//
//       <div className="Container">
//         {/* <img src={veg} alt="veg-img" width="100%" /> */}
//         <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
//           <div class="input-group">
//             <input
//               type="search"
//               placeholder="What're you searching for?"
//               aria-describedby="button-addon1"
//               class="form-control border-0 bg-light"
//             />
//             <div class="input-group-append">
//               <button
//                 id="button-addon1"
//                 type="submit"
//                 class="btn btn-link text-primary"
//               >
//                 <i class="fa fa-search"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Container>
//         <Row>
//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Make your Order</Button> */}
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Make Payments</Button> */}
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Get Fast Delivery</Button> */}
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Get Fast Delivery</Button> */}
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Make your Order</Button> */}
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Make Payments</Button> */}
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Get Fast Delivery</Button> */}
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Get Fast Delivery</Button> */}
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Make your Order</Button> */}
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Make Payments</Button> */}

//                 <br />
//                 <br />
//                 <br />
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Get Fast Delivery</Button> */}

//                 <br />
//                 <br />
//                 <br />
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Body
//                 className="card"
//                 style={{ backgroundColor: "#D9D9D9" }}
//               >
//                 <br />
//                 <br />
//                 {/* <Button>Get Fast Delivery</Button> */}

//                 <br />
//                 <br />
//                 <br />
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
// export default Veg;
