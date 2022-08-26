import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge'
import { useSelector } from "react-redux";

function ViewEvent() {
  const selectedDateEvents = useSelector(state => state.calendar.selectedDateEvents)
  
  return (
    <Container >
        <h2><Badge bg="info">Events</Badge></h2>
      {selectedDateEvents.map((event) =>{
          return(
              <Card key={event.date+event.event} border='info'>
                  <Card.Body >
                      <Card.Title>{event.event}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                      <Card.Title>{event.time}</Card.Title>
                  </Card.Footer>
              </Card>
          )
      })}
    </Container>
  );
}

export default ViewEvent;
