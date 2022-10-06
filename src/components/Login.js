import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useDispatch} from'react-redux';
import {getUser} from '../features/user';
import { useNavigate } from "react-router-dom";


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(getUser({ email:e.target.email.value,password:e.target.password.value  }))
        navigate('/')
    }
    
  return (
    <Container fluid style={{backgroundColor:'#c1c6c7',height:'100vh'}}>
      <Form onSubmit={handleLogin}style={{marginTop:'20px',marginBottom:'20px'}}>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id='email' name='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' id='password'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    
  
  );
}

export default Login;