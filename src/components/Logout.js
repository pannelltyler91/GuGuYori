import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


function Logout(){
    return(
        <Container>
            <Nav.Link href='/'>Logout</Nav.Link>
        </Container>
    )
}

export default Logout;