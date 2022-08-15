import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function OurCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Container fluid>
      <Calendar onChange={onChange} value={value} />
    </Container>
  );
}


export default OurCalendar;