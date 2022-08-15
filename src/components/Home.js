import React from 'react'
import './Home.css'
import Memories from './Memories'
import Homenav from './Homenav'
import Container from 'react-bootstrap/Container'


function Home (){
    return(
        <Container fluid id='home'>
            <Homenav/>
            <Memories/>
        </Container>
    )
}

export default Home;