// DoctorProfile.js

import  { useState } from 'react';
import { Container, Row, Col, Card, Tab, Tabs, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DoctorProfile = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()
  const [address, setAddress] = useState({
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    streetName: 'Broadway',
  });

  const [contact, setContact] = useState({
    mobile: '+1 123-456-7890',
    email: 'john.doe@example.com',
  });

  const doctorData = {
    fullName: 'Dr. John Doe',
    gender: 'Male',
    dateOfBirth: 'January 1, 1980',
    specialization: 'Cardiologist',
  };

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignOut = () => {
    localStorage.clear()
    dispatch({ type: 'user_logut', data: "" })  
    navigate("/login")
  };
  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="shadow">
          <Card.Header className="d-flex justify-content-end">
              <Button variant="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
            </Card.Header>
            <Tabs defaultActiveKey="profile" id="doctor-profile-tabs">
              <Tab eventKey="profile" title="Profile">
                <Card.Body>
                  <Form>
                    <Form.Group controlId="fullName">
                      <Form.Label>Full Name:</Form.Label>
                      <Form.Control type="text" value={doctorData.fullName} readOnly />
                    </Form.Group>
                    <Form.Group controlId="gender">
                      <Form.Label>Gender:</Form.Label>
                      <Form.Control type="text" value={doctorData.gender} readOnly />
                    </Form.Group>
                    <Form.Group controlId="dateOfBirth">
                      <Form.Label>Date of Birth:</Form.Label>
                      <Form.Control type="text" value={doctorData.dateOfBirth} readOnly />
                    </Form.Group>
                    <Form.Group controlId="specialization">
                      <Form.Label>Specialization:</Form.Label>
                      <Form.Control type="text" value={doctorData.specialization} readOnly />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Tab>

              <Tab eventKey="contact" title="Contact">
                <Card.Body>
                  <Form>
                    <Form.Group controlId="mobile">
                      <Form.Label>Mobile:</Form.Label>
                      <Form.Control
                        type="text"
                        name="mobile"
                        value={contact.mobile}
                        onChange={handleContactChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={handleContactChange}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Tab>

              <Tab eventKey="address" title="Address">
                <Card.Body>
                  <Form>
                    <Form.Group controlId="city">
                      <Form.Label>City:</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={address.city}
                        onChange={handleAddressChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="state">
                      <Form.Label>State:</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={address.state}
                        onChange={handleAddressChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="zipCode">
                      <Form.Label>Zip Code:</Form.Label>
                      <Form.Control
                        type="text"
                        name="zipCode"
                        value={address.zipCode}
                        onChange={handleAddressChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="streetName">
                      <Form.Label>Street Name:</Form.Label>
                      <Form.Control
                        type="text"
                        name="streetName"
                        value={address.streetName}
                        onChange={handleAddressChange}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorProfile;
