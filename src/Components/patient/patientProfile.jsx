
import  { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    age: '30',
    mobile: '123-456-7890',
    address: '123 Main Street, Cityville',
    gender: 'male',
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., sending data to the server
    console.log('User Info Submitted:', userInfo);
  };
  const handleSignOut = () => {
    localStorage.clear()
    dispatch({ type: 'user_logut', data: "" })  
    navigate("/login")
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>User Profile</h2>
          
              
          
          <Form className="mb-4"onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="age">
              <Form.Label>Age:</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={userInfo.age}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="mobile">
              <Form.Label>Mobile Number:</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                value={userInfo.mobile}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                value={userInfo.address}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender:</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={userInfo.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

           
          </Form>
          <Button variant="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
