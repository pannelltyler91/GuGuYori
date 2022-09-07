import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
    'user/login',
    async({email,password}) =>{
        return await fetch('http://localhost:3001/user/login', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email,password}),
          })
            .then((response) => response.json())
            
    }

)

export const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn:false,currentUser:{},loginMessage:''},
  extraReducers:{
    [getUser.pending] : (state,action) =>{
        console.log('pending')
    },
    [getUser.fulfilled]:(state,action) =>{
        state.loginMessage = action.payload
        state.isLoggedIn = true
        state.currentUser = action.payload.user
        console.log(action)
    },
    [getUser.rejected]: (state,action) =>{
        state.loginMessage = action.payload
        state.isLoggedIn = false
        console.log(state.loginMessage)
    }
  },
  reducers: {
    login: async (state, action) => {
        let thisUser = action.payload;
        console.log(thisUser)
    },
  },
});
export const { login } = userSlice.actions;
export default userSlice.reducer;