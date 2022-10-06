import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const addRecipe = createAsyncThunk(
  'recipe/recipeAdd',
  async({recipeName,website,video}) =>{
      return await fetch('http://localhost:3001/recipes/add', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({recipeName,website,video}),
        })
          .then((response) => response.json())
          
  }

)

export const getRecipes = createAsyncThunk(
  'recipes/recipesGet',
  async() =>{
      return await fetch('http://localhost:3001/recipes')
          .then((response) => response.json())
          
  }

)

export const deleteRecipe = createAsyncThunk(
  'recipe/deleteRecipe',
  async(recipe) =>{
      return await fetch('http://localhost:3001/recipes/'+ recipe.id, {
          method: 'DELETE', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          }
         
        })
          .then((response) => response.json())
          
  }

)

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: { recipeList: [] },
  extraReducers:{
    [addRecipe.pending] : (state,action) =>{
      console.log('adding recipe')
    },
    [addRecipe.fulfilled] : (state,action) =>{
      console.log('recipe added')
    },
    [addRecipe.rejected] : (state,action) =>{
      console.log('something went wrong')
    },
    [getRecipes.pending] : (state,action) =>{
      console.log('getting recipes')
    },
    [getRecipes.fulfilled] : (state,action) =>{
      console.log('got recipes')
      console.log(action.payload.recipes)
      state.recipeList = action.payload.recipes
    },
    [getRecipes.rejected] : (state,action) =>{
      console.log('something went wrong')
    },
    [deleteRecipe.pending] : (state,action) =>{
      console.log('getting recipes')
    },
    [deleteRecipe.fulfilled] : (state,action) =>{
      console.log('got recipes')
      console.log(action.payload)
      let newList =  state.recipeList.filter((item) => item.id !== action.payload.id)
      state.recipeList = newList
    },
    [deleteRecipe.rejected] : (state,action) =>{
      console.log('something went wrong')
    },
  }
});

export default recipesSlice.reducer;
