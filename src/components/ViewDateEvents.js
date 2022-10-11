import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { useSelector,useDispatch } from "react-redux";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import {deleteEvent} from '../features/calendar'

function ViewEvent() {
  const selectedDateEvents = useSelector(state => state.calendar.selectedDateEvents)
  const dispatch = useDispatch();
  
  return (
    <Container >
        <h2><Badge style={{backgroundColor:'#DBAFC1'}}>Events</Badge></h2>
      {selectedDateEvents.map((event) =>{
          return(
              <Card key={event.id} border='info'>
                <Card.Header>
                  <Card.Title>{event.time}</Card.Title>
                </Card.Header>
                  <Card.Body >
                      <Card.Title>{event.event}</Card.Title>
                      
                  </Card.Body>
                  
                      <Button onClick={()=>{dispatch(deleteEvent({id:event.id}))}}><BsFillCalendar2CheckFill/></Button>
                  
              </Card>
          )
      })}
    </Container>
  );
}

export default ViewEvent;
