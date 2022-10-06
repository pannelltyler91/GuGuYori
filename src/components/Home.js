import React,{useState} from 'react'
import './Home.css'
import Memories from './Memories'
import Homenav from './Homenav'
import Welcome from './WelcomeMessage'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddToCalendar from './AddToCalendar'
import Button from 'react-bootstrap/Button'
import OurCalendar from './Calendar'
import {useSelector} from 'react-redux'


function Home (){
    const user = useSelector((state) => state.user.currentUser)
    const [showModal,setShowModal] = useState(false)
    return(
        <Container fluid id='home'>
            <Homenav/>
            {localStorage.getItem('user') && user ? <h1>Welcome {localStorage.getItem('user')}!</h1> : ''}
            <Row>
                <Col lg={3}></Col>
               {localStorage.getItem('user')  ? <Col lg={6}><Memories/></Col> : <Col lg={6}></Col> } 
                <Col lg={3}></Col>
            </Row>
            <Row style={{margin:'10px'}}>
                
                {localStorage.getItem('user')  ? <Button variant='info' onClick={()=>{setShowModal(true)}}>Add to Calendar</Button> : ''}
            </Row>
            <Row>
               {localStorage.getItem('user') ? <OurCalendar/> : '' } 
            </Row>
            {localStorage.getItem('user') ? <AddToCalendar show={showModal} onHide={() => setShowModal(false)} /> : <Welcome/>}
        </Container>
    )
}

export default Home;