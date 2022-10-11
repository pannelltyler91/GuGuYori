import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {getEvents} from '../features/calendar'
import { useDispatch } from 'react-redux';
import ViewEvent from './ViewDateEvents';



function OurCalendar() {
  const dispatch = useDispatch();
  const handleClick = (e) =>{
    e.preventDefault();
    dispatch(getEvents({date:e.target.date.value}))
    e.target.date.value = ''
  }
 

  return (
    <Container fluid bg='info'>
      <Row >
        <Col lg={6}>
          <Container>
            <Form onSubmit={handleClick}>
              <Form.Control type='date' name='date' id='today'/>
              <Form.Control bg='info' type='submit' name='submit' value='Find Events' />
            </Form>
          </Container>
        </Col>
        <Col  lg={6}>
          <ViewEvent/>
        </Col>
      </Row>
    </Container>
  );
}


export default OurCalendar;