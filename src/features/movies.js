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

export const moviesSlice = createSlice({
  name: "movies",
  initialState: { movieList: [], searchResults: [], },
  extraReducers:{
    [addMovie.pending] : (state,action) =>{
        console.log('pending')
    },
    [addMovie.fulfilled]:(state,action) =>{
        console.log('fulfilled')
    },
    [addMovie.rejected]: (state,action) =>{
        console.log('rejected')
    }
  },
  
});

export default moviesSlice.reducer;
