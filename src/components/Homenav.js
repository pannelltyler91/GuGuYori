import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Homenav(){
    return(
        <Container fluid>
            <Navbar  style={{backgroundColor:'#0a8499'}} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">구구 사이트</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="movies">Movies</Nav.Link>
                        <Nav.Link href="recipes">Recipes</Nav.Link>
                        <NavDropdown title="Other" id="basic-nav-dropdown">
                        <NavDropdown.Item href="travel">Travel</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Music
                        </NavDropdown.Item>
                        <NavDropdown.Item href="calendar">Calendar</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    )
}

export default Homenav;