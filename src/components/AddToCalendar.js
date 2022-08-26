import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {addEvent} from '../features/calendar'
import {useDispatch} from 'react-redux';

function AddToCalendar(props){
    const dispatch = useDispatch();
    const handleAddEvent= (e) =>{
        e.preventDefault();
        let event = {date:e.target.date.value,event:e.target.event.value,time:e.target.startTime.value}
        dispatch(addEvent(event))
        e.target.value = ''
    }
    return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Event
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleAddEvent}>
        <Modal.Body>
          <Card>
              <Card.Title>New Event</Card.Title>
              <Card.Body>
              <Form.Control type="date" placeholder="Date" id="date" name="date" aria-label="Search" />
              <Form.Control type='text' placeholder="Event" id='event' name='event'/>
              <Form.Control type='time' placeholder='From' id='startTime' name='startTime'/>
              <Form.Control type='submit' value='Add' id='submit' name='submit'/>
              </Card.Body>
          </Card>
        </Modal.Body>
      </Form>
      <Modal.Footer>
        <Button onClick={props.onHide}>Back </Button>
        
      </Modal.Footer>
    </Modal>
    )
}

export default AddToCalendar;