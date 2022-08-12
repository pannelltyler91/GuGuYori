import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: { recipeList: [] },
  reducers: {
    addToList: (state, action) => {
        let thisItem = action.payload;
            console.log(thisItem);
            state.recipeList = [...state.recipeList, thisItem]
      },
  },
});
export const { addToList } = recipesSlice.actions;
export default recipesSlice.reducer;
