import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: { calendarEvents: [], selectedDateEvents:[],selectedDate:'' },
  reducers: {
    addEvent: (state, action) => {
      
      let existingEvent = state.calendarEvents.find((element) => element.date === action.payload.date && element.event === action.payload.event )
      existingEvent? alert('Event already exists') : state.calendarEvents = [...state.calendarEvents,action.payload]
      console.log("calendar events",state.calendarEvents)
      
    },
    getSelectedDateEvents: (state,action) =>{
      state.selectedDate = action.payload
      console.log("selected date",state.selectedDate)
      let selectedDayEvents = state.calendarEvents.filter((event) => event.date === state.selectedDate)
      state.selectedDateEvents = selectedDayEvents
      console.log("selected events",state.selectedDateEvents)
    }
  },
});
export const { addEvent,getSelectedDateEvents} = calendarSlice.actions;
export default calendarSlice.reducer;
