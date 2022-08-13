import {React,useState} from "react";
import { useDispatch } from "react-redux";
import {addToList} from '../features/movies'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function Movies() {
  const [movieResults,setMovieResults] = useState([])
  const dispatch = useDispatch();
  const searchMovies = (e) => {
    e.preventDefault();
    fetch("http://www.omdbapi.com/?apikey=1a84594&s=" +e.target.movieSearch.value)
      .then((res) => res.json())
      .then((data) => {
        setMovieResults(data.Search)
      });
    e.target.movieSearch.value = "";
  }

  return (
    <Container>
      <form onSubmit={searchMovies}>
        <input
          type="search"
          name="movieSearch"
          id="movieSearch"
          placeholder="Search Movies"
        />
        <input type="submit" name="movieSubmit" value="Search" />
      </form>
      <div id="movieResults">
        {movieResults.map((movie) => {
          return (
            <Card style={{width:'250px',height:'300px',margin:'10px'}} className="movie" key={movie.imdbID}>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Img
                src={movie.Poster}
                
                height="200px"
                width="50px"
                alt="sorry"
              />
              <Button onClick={() => {dispatch(addToList({id:movie.imdbID,title:movie.Title,poster:movie.Poster}))} }>+</Button>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

export default Movies;
