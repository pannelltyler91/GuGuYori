import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function Homenav(){
    return(
        <Container fluid>
            <Navbar  bg='info' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">구구 사이트</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="movies">Movies</Link>
                        <Link to="recipes">Recipes</Link>
                        <Link to='travel'>Travel</Link>
                        <Link to='calendar'>Calendar</Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    )
}

export default Homenav;