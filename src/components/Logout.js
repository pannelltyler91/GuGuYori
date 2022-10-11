import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {logout} from '../features/user'

function Logout(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return(
        <Container>
            {localStorage.getItem('user')?<Button  style={{color:'white',backgroundColor:'#A1CECC',boxShadow:'none',outline:'none'}} onClick={() => {dispatch(logout())}}>Logout</Button> : navigate('/')}
            
        </Container>
    )
}

export default Logout;