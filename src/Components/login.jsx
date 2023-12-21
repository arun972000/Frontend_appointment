import axios from 'axios';
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { URL } from '../url';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const DoctorLogin2 = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const loginApi = async () => {
    try {
      const res = await axios.post(`${URL}api/login`, loginFormData)
      localStorage.setItem("user", JSON.stringify(res.data.data))
      dispatch({ type: 'user_login', data: "" })
      navigate("/")
    } catch (err) {
      toast.error('Invalid password or email', {
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
  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleForgotPassword = () => {

    console.log('Forgot Password clicked');
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginApi()
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
            <Card.Title className="text-white">Login</Card.Title>
          </Card.Body>
          <Card.Body style={{ backgroundColor: 'white', borderRadius: '0 0 15px 15px' }}>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={loginFormData.email}
                  onChange={handleLoginChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={loginFormData.password}
                  onChange={handleLoginChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>

              <Button variant="link" onClick={handleForgotPassword} className="mt-2">
                Forgot Password
              </Button>

              <div className="mt-2">
                <p className="mb-0">Not a member? <Link to="/register" >Register</Link></p>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>

  );
};

export default DoctorLogin2;