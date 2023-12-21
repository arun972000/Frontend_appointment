import { useState } from 'react';
import { Form, Button, Card, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { URL } from '../url';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorLoginForm = () => {
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    userType: 'patient',
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const registerApi = async () => {
    try {
      await axios.post(`${URL}api/register`, formData)
      navigate("/login")
    } catch (err) {
       toast.error('User already exists!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      console.log(err)
    }
  }
  const handleUserTypeChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      userType: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    registerApi()

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
   
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow" style={{ width: '500px', borderRadius: '15px' }}>
        <Card.Body style={{ backgroundColor: '#007BFF', borderRadius: '15px 15px 0 0' }}>
          <Card.Title className="text-white">Sign up</Card.Title>
        </Card.Body>
        <Card.Body style={{ backgroundColor: 'white', borderRadius: '0 0 15px 15px' }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName">
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

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="userType" className="mb-3">
              <Form.Label>User Type</Form.Label>
              <div className="d-flex justify-content-between">
                <Button
                  variant={formData.userType === 'doctor' ? 'success' : 'secondary'}
                  onClick={() => handleUserTypeChange('doctor')}
                >
                  <FontAwesomeIcon icon={faUserMd} /> Doctor
                </Button>
                <Button
                  variant={formData.userType === 'patient' ? 'success' : 'secondary'}
                  onClick={() => handleUserTypeChange('patient')}
                >
                  <FontAwesomeIcon icon={faUser} /> Patient
                </Button>
              </div>
            </Form.Group>


            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default DoctorLoginForm;
