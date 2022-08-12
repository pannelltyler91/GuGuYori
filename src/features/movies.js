import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: { movieList: [], searchResults: [], },
  reducers: {
    searchMovie:  (state, action) => {
      let thisItem = action.payload;
      console.log(thisItem);
      
       
    },
    addToList: (state, action) => {
      let thisItem = action.payload;
      let itemExists = state.movieList.find((item) => item.id === thisItem.id)
      itemExists?alert('Movie already in list'):state.movieList = [...state.movieList,thisItem] 

      console.log(state.movieList)
      
    },
  },
});
export const { addToList, searchMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
