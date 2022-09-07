import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from './Logout'
import {useSelector} from 'react-redux'



function Homenav(){
    const loggedIn = useSelector((state) => state.user.isLoggedIn)
    return(
        <Container style={{backgroundColor:'#0dcaf0'}} fluid>
            <Navbar  expand="lg">
                <Container>
                    <Navbar.Brand href="#home">구구 사이트</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       {loggedIn ? <Nav.Link href="movies">Movies</Nav.Link> : '' } 
                        {loggedIn ? <Nav.Link href="recipes">Recipes</Nav.Link> : ''}
                        {loggedIn ? <Nav.Link href='travel'>Travel</Nav.Link> : ''}
                        {loggedIn ? <Nav.Link href='calendar'>Calendar</Nav.Link> : ''}
                    </Nav>
                    <Nav>
                    {loggedIn ?  <Logout/> : <Nav.Link href='login'>Login</Nav.Link> }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    )
}

export default Homenav;