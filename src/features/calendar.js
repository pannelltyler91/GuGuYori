import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: { calendar: [],  },
  reducers: {
    addToCalendar: (state, action) => {
      console.log(action.payload)
    
      
    },
  },
});
export const { addToCalendar} = calendarSlice.actions;
export default calendarSlice.reducer;
