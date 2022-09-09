import React from 'react'
import {useSelector} from 'react-redux'

function Watchlist(){
    const movieList = useSelector((state) => state.movies.movieList)
    return(
        <div>
            {movieList.map((movie) => {
          return (
            <div className="movie" key={movie.imdbID}>
              <p style={{color:'black'}}>{movie.title}</p>
              <img
                src={movie.poster_url}
                
                height="100px"
                width="100px"
                alt="sorry"
              />
            </div>
          );
        })}
        </div>
    )
}

export default Watchlist;