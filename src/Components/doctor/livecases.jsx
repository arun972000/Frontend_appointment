/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { URL } from '../../url.js';

const LiveCases = () => {
  const [cases, setCases] = useState([]);
  const patientlist = async () => {
    try {
      const res = await axios.get(`${URL}api/appointmentlist`)
      setCases(res.data)
      console.log(cases)
    }
    catch (err) {
      console.log(err)
    }
  }
  const handleAccept = async (caseId) => {
    try {
      await axios.put(`${URL}api/appoinmentupdate/${caseId}`)
      patientlist()
    }
    catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    patientlist()
   
  }, [])
  return (
    <div className="container mt-4">
      <h2>Live Cases - Accepted by Doctors</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Condition</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseItem) => (
            <tr key={caseItem.id}>
              <td>{caseItem.id}</td>
              <td>{caseItem.fullName}</td>
              <td>{caseItem.consultingType}</td>
              <td>{caseItem.state}</td>
              <td>
                {caseItem.state === 'pending' && (
                  <Button
                    variant="success"
                    onClick={() => handleAccept(caseItem.id)}
                  >
                    Accept
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LiveCases;
