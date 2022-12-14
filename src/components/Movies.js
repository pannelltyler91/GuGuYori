import {React} from "react";
import { useDispatch,useSelector } from "react-redux";
import {addMovie, searchMovie} from '../features/movies'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'



function Movies() {
  const dispatch = useDispatch();
  const movieResults = useSelector((state) => state.movies.searchResults)
  const searchMovies = (e) => {
    e.preventDefault();
    dispatch(searchMovie({searchValue:e.target.movieSearch.value}))
    e.target.movieSearch.value = "";
  }
  
  return (
    <Container style={{backgroundColor:'#FFEF9F'}}  >
        <Navbar style={{backgroundColor:'#498C8A',color:'#c1c6c7'}} expand="lg">
      <Container >
        <Navbar.Brand href="#" style={{color:'white'}}>영화 </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            
            <Link to="/" style={{color:'white'}}>구구</Link>
            {localStorage.getItem('user') ? <Link to="/watchlist" style={{color:'white'}}>Watchlist</Link> : ""}
            
            
          </Nav>
          <Form  onSubmit={searchMovies} className="d-flex">
            <Form.Control type="search" placeholder="Search Movies" id="movieSearch" name="movieSearch" aria-label="Search" />
            <Form.Control style={{backgroundColor:'#498C8A',color:'white'}}type="submit" name="movieSubmit" value="Search" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Row id="movieResults">
        {movieResults.map((movie) => {
          return (
              <Col lg={3} key={movie.imdbID}>
            <Card style={{width:'250px',height:'300px',margin:'10px',backgroundColor:'#498C8A'}} className="movie" key={movie.imdbID}>
              <Card.Title style={{fontSize:'15px'}}>{movie.Title}</Card.Title>
              <Card.Img src={movie.Poster} height="190px"  width="100px" alt="sorry" />
              <Button style={{margin:'10px',backgroundColor:'#498C8A'}} onClick={() => {dispatch(addMovie({id:movie.imdbID,title:movie.Title,poster:movie.Poster}))} }>Add To List</Button>
            </Card>
            </Col>
          );
        })}
      </Row>
      
    </Container>
  );
}

export default Movies;
