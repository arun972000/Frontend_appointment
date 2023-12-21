// BookedAppointmentsList.js

import { Card, ListGroup } from 'react-bootstrap';

const appointments=[ { id: 1, patientName: 'John Doe', date: '2023-01-01' },
{ id: 2, patientName: 'Jane Doe', date: '2023-01-02' }]

const BookedAppointmentsList = () => {
  return (
    <Card className="mt-4 shadow">
      <Card.Body>
        <Card.Title>Booked Appointments</Card.Title>
        <ListGroup>
          {appointments.map(appointment => (
            <ListGroup.Item key={appointment.id}>
              <strong>Patient Name:</strong> {appointment.patientName} |{' '}
              <strong>Date:</strong> {appointment.date}
              {/* You can include more details or actions if needed */}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default BookedAppointmentsList;
