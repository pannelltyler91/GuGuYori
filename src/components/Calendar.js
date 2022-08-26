import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



function OurCalendar() {
  const [value] = useState(new Date());

  const handleClick = (e) =>{
    console.log(e)
   
    
  }
 

  return (
    <Container fluid>
      <Calendar onChange={handleClick} value={value}  />
    </Container>
  );
}


export default OurCalendar;