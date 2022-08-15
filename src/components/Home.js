import React from 'react'
import './Home.css'
import Memories from './Memories'
import Homenav from './Homenav'
import Container from 'react-bootstrap/Container'
import OurCalendar from './Calendar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Home (){
    return(
        <Container fluid id='home'>
            <Homenav/>
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}><Memories/></Col>
                <Col lg={3}></Col>
            </Row>
            <Row>
                <Col lg={4}><OurCalendar style={{width:'75%'}}/></Col>
                <Col lg={4}><OurCalendar style={{width:'75%'}}/></Col>
                <Col lg={4}><OurCalendar style={{width:'75%'}}/></Col>
            </Row>
        </Container>
    )
}

export default Home;