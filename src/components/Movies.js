import {React,useState} from "react";
import { useDispatch } from "react-redux";
import {addToList} from '../features/movies'


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
    <div>
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
            <div className="movie" key={movie.imdbID}>
              <p style={{color:'black'}}>{movie.Title}</p>
              <img
                src={movie.Poster}
                
                height="100px"
                width="100px"
                alt="sorry"
              />
              <button onClick={() => {dispatch(addToList({id:movie.imdbID,title:movie.Title,poster:movie.Poster}))} }>+</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
