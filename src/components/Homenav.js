import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from './Logout'
import {Link } from 'react-router-dom'



function Homenav(){
    
    return(
        <Container style={{backgroundColor:'#0dcaf0'}} fluid>
            <Navbar  expand="lg">
                <Container>
                    <Link to="/">구구 사이트</Link> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       {localStorage.getItem('user') ? <Link to="/movies">Movies</Link> : '' } 
                        {localStorage.getItem('user') ? <Link to="/recipes">Recipes</Link> : ''} 
                        {localStorage.getItem('user') ? <Link to='/travel'>Travel</Link> : ''} 
                        {localStorage.getItem('user') ? <Link to='/calendar'>Calendar</Link> : ''}
                    </Nav>
                    <Nav>
                    {localStorage.getItem('user') ?  <Logout/> : <Nav.Link href='login'>Login</Nav.Link> }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    )
}

export default Homenav;