import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useSelector,useDispatch} from 'react-redux'
import AddToCalendar from '../features/calendar'

function OurCalendar() {
  const [value] = useState(new Date());
  const dispatch = useDispatch();
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