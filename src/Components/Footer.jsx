
import { Row, Col } from 'react-bootstrap';

const SimpleFooter = () => {
  return (
    <footer className="mt-5 bg-light">
  
        <Row>
          <Col className="text-center">
            <p className="mb-0 " style={{backgroundColor:'black',color:"white"}}>© 2023 Your Company Name</p>
          </Col>
        </Row>

    </footer>
  );
};

export default SimpleFooter;
