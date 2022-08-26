import React,{useState} from 'react'
import './Home.css'
import Memories from './Memories'
import Homenav from './Homenav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddToCalendar from './AddToCalendar'
import Button from 'react-bootstrap/Button'
import OurCalendar from './Calendar'


function Home (){
    const [showModal,setShowModal] = useState(false)
    return(
        <Container fluid id='home'>
            <Homenav/>
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}><Memories/></Col>
                <Col lg={3}></Col>
            </Row>
            <Row style={{margin:'10px'}}>
                
                <Button variant='info' onClick={()=>{setShowModal(true)}}>Add to Calendar</Button>
            </Row>
            <Row>
                <OurCalendar/>
            </Row>
            <AddToCalendar show={showModal} onHide={() => setShowModal(false)} />
        </Container>
    )
}

export default Home;