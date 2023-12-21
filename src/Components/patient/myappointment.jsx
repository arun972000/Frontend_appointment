import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../../url.js';

const BookedAppointments = () => {
  const [bookedAppointments, setBookedAppointments] = useState([]);

  const myappointment =async()=>{
    try{
        const res=await axios.get(`${URL}api/appointmentlist`)
        setBookedAppointments(res.data)
        
    }catch(err){
        console.log(err.message)
    }
  }

  const cancelapps=async(id)=>{
    try{
        await axios.delete(`${URL}api/appoinmentRemove/${id}`)
    }catch(err){
        console.log(err)
    }
  }
  useEffect(()=>{
    myappointment()
  })

  return (
    <div className="container mt-4">
      <h2>Booked Appointments</h2>
      <table className="table">
        <thead>
          <tr>
            
            <th>Patient Name</th>
            <th>Age</th>
            <th>Appointment Time</th>
            <th>Consulting Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookedAppointments.map(appointment => (
            <tr key={appointment.id}>
              
              <td>{appointment.fullName}</td>
              <td>{appointment.age}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.consultingType}</td>
              <td>{appointment.state}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => cancelapps(appointment.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookedAppointments;
