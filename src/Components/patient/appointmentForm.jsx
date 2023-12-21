import { useState } from 'react';
import { Form, Button, Container, Modal , Card, ListGroup, Row, Col,} from 'react-bootstrap';
import { URL } from '../../url';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorAppointmentForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const hospitalInfo = {
    name: 'ABC Hospital',
    address: '123 Medical Street, Cityville',
    phone: '123-456-7890',
  };

  const emergencyContact = {
    name: 'Emergency Services',
    phone: '911',
  };

  const appointmentTimings = [
    '9:00 AM - 10:00 AM',
    '10:30 AM - 11:30 AM',
    '1:00 PM - 2:00 PM',
    '3:30 PM - 4:30 PM',
  ];

 
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age:"",
    phoneNumber: '',
    appointmentDate: '',
    consultingType: 'general',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formapi = async () => {
    try {
      await axios.post(`${URL}api/appointment`, formData);
      handleShowModal();
      toast.success('Appointment successfully booked, Hurray!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setShowModal(false);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        appointmentDate: '',
        consultingType: 'general',
        comments: '',
      })
    } catch (err) {
      toast.error('server error', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formapi();
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      <Container className="mt-4">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h2>Book Appointment</h2>

          <Card>
            <Card.Body>
              <Card.Title>{hospitalInfo.name}</Card.Title>
              <Card.Text>
                <strong>Address:</strong> {hospitalInfo.address}
                <br />
                <strong>Phone:</strong> {hospitalInfo.phone}
              </Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5>Emergency Contact</h5>
                <p>
                  <strong>Name:</strong> {emergencyContact.name}
                  <br />
                  <strong>Phone:</strong> {emergencyContact.phone}
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card>

          <h4 className="mt-4">Available Appointment Timings</h4>
          <ul>
            {appointmentTimings.map((timing, index) => (
              <li key={index}>{timing} <Button variant="primary"   className="mb-3" onClick={handleShowModal}>
             Book now
            </Button></li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
      <Container className="mt-5">
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Appointment Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container >

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFullName" className="mb-1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control className="p-3"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formAge" className="mb-1">
                  <Form.Label>Age</Form.Label>
                  <Form.Control className="p-3"
                    type="number"
                    placeholder="Enter your age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber" className="mb-1">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control className="p-3"
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formAppointmentDate" className="mb-1">
                  <Form.Label>Appointment Date</Form.Label>
                  <Form.Control className="p-3"
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formConsultingType" className="mb-1">
                  <Form.Label>Consulting Type</Form.Label>
                  <Form.Control className="p-3"
                    as="select"
                    name="consultingType"
                    value={formData.consultingType}
                    onChange={handleChange}
                    required
                  >
                    <option value="General">General</option>
                    <option value="ENT">ENT</option>
                    <option value="Hair">Hair Fall</option>
                    <option value="Skin care">Skin care</option>
                    <option value="Others">Others</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formComments" className="mb-1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control className="p-3"
                    as="textarea"
                    rows={3}
                    placeholder="Any additional comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-1">
                  Submit
                </Button>
              </Form>
            </Container>
          </Modal.Body>

        </Modal>


      </Container>
    </>
  );
};

export default DoctorAppointmentForm;
