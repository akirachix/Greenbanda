import React from 'react';
import "./fruits.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import veg from '../Home/vegetables.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import strawberry from '../imgfruits/mangoes.jpg'

function home() {
    return(
      <div>
     <div>
  
     <Navbar style={{backgroundColor: "#2FC85A"}} variant="#2FC85A">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto" style={{marginLeft:'70%'}}>
            <Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="/Fruits" style={{color:'white'}}>Fruits</Nav.Link>
            <Nav.Link href="/Vegetables" style={{color:'white'}}>Vegetables</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <div className='Container'> 
    <img src={veg} alt='veg-img' width='100%' />  
    <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div class="input-group">
              <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light"/>
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
</div>

<Container>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={strawberry} />
            <Card.Body>
              <Card.Title>Strarberries</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>




</Container>

    </div>
    

        
    



    
        

    )
}
export default home;