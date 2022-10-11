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
      if(action.payload.loggedIn === false){
        alert(action.payload.message)
      }else{
        state.loginMessage = action.payload
        state.isLoggedIn = true
        state.currentUser = action.payload.user
        localStorage.setItem('user',JSON.stringify(action.payload.user))
        console.log(action)

      }
    },
    [getUser.rejected]: (state,action) =>{
        state.loginMessage = action.payload
        state.isLoggedIn = false
        console.log(state.loginMessage)
    }
  },
  reducers: {
    logout: async (state, action) => {
        state.isLoggedIn = false;
        localStorage.removeItem('user')

    },
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;