import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function NavbarPatient() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar sticky="top"  key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Link to="/" className="navbar-brand">Patient</Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3" >
                  <Link to="/" className="nav-link">Our Services</Link>
                  <Link to="/doctorList" className="nav-link">Our Doctors</Link>
                  <NavDropdown
                    title="For You"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to="/appointmentForm" className="dropdown-item">Book Appointment</Link>
                    <Link className="dropdown-item" to="/patientappointment">My Appoinments</Link>
                  </NavDropdown>
                </Nav>
                <Link to="/patient-profile" className="nav-link"><FontAwesomeIcon icon={faUser} size="2x" /></Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarPatient;