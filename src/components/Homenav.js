import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from './Logout'
import {useSelector} from 'react-redux'
import {Link } from 'react-router-dom'



function Homenav(){
    const loggedIn = useSelector((state) => state.user.isLoggedIn)
    return(
        <Container style={{backgroundColor:'#0dcaf0'}} fluid>
            <Navbar  expand="lg">
                <Container>
                    <Link to="/">구구 사이트</Link> |
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       {loggedIn ? <Link to="/movies">Movies</Link> : '' } |
                        {loggedIn ? <Link to="/recipes">Recipes</Link> : ''} |
                        {loggedIn ? <Link to='/travel'>Travel</Link> : ''} |
                        {loggedIn ? <Link to='/calendar'>Calendar</Link> : ''}
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