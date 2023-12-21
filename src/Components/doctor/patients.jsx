/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import { URL } from '../../url';
import { Button } from 'react-bootstrap';



const PatientList = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [patients,setPatients] = useState([])
  const patientlistapi=async()=>{
    try{
      const res=await axios.get(`${URL}api/appointmentlist`)
      setPatients(res.data)
      
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    patientlistapi()
  },[])
  return (
    <div className="container mt-4">
      <h2>Patient Details</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Diagnosis</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.fullName}</td>
              <td>{patient.age}</td>
              <td>{patient.consultingType}</td>
              <td><Button variant="primary" ref={target} onClick={() => setShow(!show)}>
        More Info
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            {patient.comments}
          </div>
        )}
      </Overlay></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
