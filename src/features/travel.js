import { createSlice } from "@reduxjs/toolkit";




export const countrySlice = createSlice({
  name: "country",
  initialState: { destination:[],searchValue:'',status:'',myDestination:{} },
  reducers:{
    getDestinationData:(state,action) =>{
      state.searchValue = [...state.searchValue,action.payload]
      console.log(state.searchValue)

    }
  },
 
});
export const { getDestinationData } = countrySlice.actions;
export default countrySlice.reducer;
