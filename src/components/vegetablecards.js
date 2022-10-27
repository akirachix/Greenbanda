import Button from 'react-bootstrap/Button';
import './vegetablecards.css';
import Vegetables from '../images/capsicum.jpg';
// import Card from {reactbootstrap};

function vegetablecards () {
  return (
    <div className='all-vegetable-cards'>
        <div className='vegetabl-cards'>
        <img src={Vegetables}  />


        </div>


    </div>

    // <Card style={{ width: '18rem'}} >
    //   <Card.Img variant = "top" src="capsicum.jpg" />
    //   <Card.Body>
    //     <Card.Title>Capsicum</Card.Title>
    //     <Card.Text>
    //       Available in all types,sizes and colors to boost your Vitamin
    //     </Card.Text>
    //      <Button variant="primary">Go som</Button>
    //   </Card.Body> 
    // </Card>
  );
}

export default vegetablecards;