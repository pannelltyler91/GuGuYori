import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const addMovie = createAsyncThunk(
  'movie/watchlistAdd',
  async({id,title,poster}) =>{
      return await fetch('http://localhost:3001/movies/add', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id,title,poster}),
        })
          .then((response) => response.json())
          
  }

)
export const searchMovie = createAsyncThunk(
  'movie/searchMovie',
  async(search) =>{
      return await fetch('http://www.omdbapi.com/?apikey=1a84594&s=' + search.searchValue, {

        })
          .then((response) => response.json())
          
  }

)
export const getWatchList = createAsyncThunk(
  'movie/watchListGet',
  async() =>{
      return await fetch('http://localhost:3001/movies')
          .then((response) => response.json())
          
  }

)

export const deleteMovie = createAsyncThunk(
  'movie/deleteMovie',
  async(movie) =>{
      return await fetch('http://localhost:3001/movies/'+ movie.id, {
          method: 'DELETE', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          }
         
        })
          .then((response) => response.json())
          
  }

)





export const moviesSlice = createSlice({
  name: "movies",
  initialState: { movieList: [], searchResults: [], },
  extraReducers:{
    [searchMovie.pending] : (state,action) =>{
      console.log('searching for movies')
    },
    [searchMovie.fulfilled] : (state,action) =>{
      console.log('found movies')
      state.searchResults = action.payload.Search.slice(0,9)
    },
    [searchMovie.rejected] : (state,action) =>{
      
    },
    [addMovie.pending] : (state,action) =>{
        console.log('pending')
    },
    [addMovie.fulfilled]:(state,action) =>{
        console.log('fulfilled') 
    },
    [addMovie.rejected]: (state,action) =>{
        console.log('rejected')
    },
    [getWatchList.pending] : (state,action) =>{
        console.log('pending')
    },
    [getWatchList.fulfilled]:(state,action) =>{
        console.log('watch list updated')
        console.log(action.payload) 
        state.movieList = action.payload.watchList

    },
    [getWatchList.rejected]: (state,action) =>{
        console.log('rejected')
    },
    [deleteMovie.pending] : (state,action) =>{
        console.log('pending')
    },
    [deleteMovie.fulfilled]:(state,action) =>{
        console.log('movie deleted')
      let newList =  state.movieList.filter((item) => item.imdbID !== action.payload.movieID)
        state.movieList = newList
    },
    [deleteMovie.rejected]: (state,action) =>{
        console.log('rejected')
    }
  },
  
});

export default moviesSlice.reducer;
