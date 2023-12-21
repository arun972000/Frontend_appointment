import './App.css'
import Home from './Components/Home';
import NavbarDoctor from './Components/Navbar/DocNavbar'
import NavbarPatient from './Components/Navbar/PatientNavbar'
import { Routes, Route } from "react-router-dom"
import DoctorAppointmentForm from './Components/patient/appointmentForm';
import PatientList from './Components/doctor/patients';
import DoctorList from './Components/patient/doctorslist';
import BookedAppointmentsList from './Components/doctor/allappointment';
import BookedAppointments from './Components/patient/myappointment';
import LiveCases from './Components/doctor/livecases';
import DoctorLoginForm from "./Components/register"
import PrivateRouteDoctor from './Components/privateRouteDoctor';
import PrivateRoutePatient from './Components/privateRoutePatient';
import MyCalendar from './Components/doctor/Calender';
import DoctorProfile from './Components/doctor/Profile';
import { useSelector } from 'react-redux';
import PrivateRoute from './Components/privateRoute';
import LoginRoute from './loginAuth';
import UserProfile from './Components/patient/patientProfile';
import Footer from './Components/Footer';

function App() {
  const type = JSON.parse(localStorage.getItem('user'));
  const log = useSelector(state => state.loginReducer)
  return (
    <>
      {log.isLoggedIn && (type.userType === "doctor" ? <NavbarDoctor /> : <NavbarPatient />)}

      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/register" element={<DoctorLoginForm />} />
        <Route path="/login" element={<LoginRoute element={<Home />}/>} />
        <Route path="/appointmentForm" element={<PrivateRoutePatient element={<DoctorAppointmentForm />} />} />
        <Route path="/patientList" element={<PrivateRouteDoctor element={<PatientList />} />} />
        <Route path="/calender" element={<PrivateRouteDoctor element={<MyCalendar />} />} />
        <Route path="/doctorList" element={<PrivateRoutePatient element={<DoctorList />} />} />
        <Route path="/doctorappointment" element={<PrivateRouteDoctor element={<BookedAppointmentsList />} />} />
        <Route path="/patientappointment" element={<PrivateRoutePatient element={<BookedAppointments />} />} />
        <Route path="/livecases" element={<PrivateRouteDoctor element={<LiveCases />} />} />
        <Route path="/doc-profile" element={<PrivateRouteDoctor element={<DoctorProfile />} />} />
        <Route path="/patient-profile" element={<PrivateRoutePatient element={<UserProfile />} />} />
      </Routes>
      {log.isLoggedIn && <Footer/>}
    </>
  )
}

export default App
