import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function Homenav(){
    return(
        <Container style={{backgroundColor:'#0dcaf0'}} fluid>
            <Navbar  expand="lg">
                <Container>
                    <Navbar.Brand href="#home">구구 사이트</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="movies">Movies</Nav.Link>
                        <Nav.Link href="recipes">Recipes</Nav.Link>
                        <Nav.Link href='travel'>Travel</Nav.Link>
                        <Nav.Link href='calendar'>Calendar</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    )
}

export default Homenav;