/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./servicecard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ServiceCard({ item, i }) {
  return (
    <div key={i} className="col-md-6 col-lg-4">


      <Card className="shadow p-3 mb-5 bg-white rounded service">

        <Card.Body className="text-center ">
          <FontAwesomeIcon icon={item.icon} size="2x" className="mb-3"/>
          
          <Card.Title className="mb-3" >{item.name}</Card.Title>
          <Card.Text className="mb-3" >
          
            {item.content}
          </Card.Text>
          <Button style={{ borderRadius: 40 }} variant="outline-primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ServiceCard;