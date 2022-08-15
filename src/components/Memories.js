import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../images/IMG-2688.jpg";
import pic2 from "../images/IMG-2678.jpg";
import pic3 from '../images/IMG-2685.jpg';

function Memories(){
    return(
        <Container fluid style={{height:'500',marginBottom:'20px',marginTop:'20px'}}>
            <Carousel fade>
                <Carousel.Item>
                    <img  className="d-block w-100"  src={pic1} height='500px'  alt="First slide" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100"  src={pic2} height='500px'  alt="Second slide"  />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100"  src={pic3}  height='500px' alt="Third slide"  />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    </Container>
    )
}

export default Memories;