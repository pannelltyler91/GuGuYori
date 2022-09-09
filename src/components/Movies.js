import {React,useState} from "react";
import { useDispatch } from "react-redux";
import {addMovie, getWatchList} from '../features/movies'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Watchlist from './Watchlist'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

function Movies() {
  const [movieResults,setMovieResults] = useState([])
  const dispatch = useDispatch();
  const searchMovies = (e) => {
    e.preventDefault();
    fetch("http://www.omdbapi.com/?apikey=1a84594&s=" +e.target.movieSearch.value)
      .then((res) => res.json())
      .then((data) => {
        setMovieResults(data.Search.slice(0,8))
      });
    e.target.movieSearch.value = "";
  }
  return (
    <Container style={{backgroundColor:'#0dcaf0'}} fluid>
        <Navbar style={{backgroundColor:'#0dcaf0',color:'#c1c6c7'}} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">영화 </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <LinkContainer>
            <Link to="/">구구</Link>
            </LinkContainer>
            <Button onClick={() => {dispatch(getWatchList())}}>Watchlist</Button>
          </Nav>
          <Form  onSubmit={searchMovies} className="d-flex">
            <Form.Control type="search" placeholder="Search Movies" id="movieSearch" name="movieSearch" aria-label="Search" />
            <Form.Control style={{backgroundColor:'#0dcaf0',color:'#c1c6c7'}}type="submit" name="movieSubmit" value="Search" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Row id="movieResults">
        {movieResults.map((movie) => {
          return (
              <Col lg={3} key={movie.imdbID}>
            <Card style={{width:'250px',height:'300px',margin:'10px',backgroundColor:'#c1c6c7'}} className="movie" key={movie.imdbID}>
              <Card.Title style={{fontSize:'15px'}}>{movie.Title}</Card.Title>
              <Card.Img src={movie.Poster} height="190px"  width="100px" alt="sorry" />
              <Button style={{margin:'10px',backgroundColor:'#0dcaf0'}} onClick={() => {dispatch(addMovie({id:movie.imdbID,title:movie.Title,poster:movie.Poster}))} }>Add To List</Button>
            </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Watchlist/>
      </Row>
    </Container>
  );
}

export default Movies;
