import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getEvents = createAsyncThunk(
  'movie/watchListGet',
  async(date) =>{
      return await fetch('http://localhost:3001/calendar' +date.date)
          .then((response) => response.json())
          
  }

)

export const addEvent = createAsyncThunk(
  'movie/eventAdd',
  async({date,event,time}) =>{
      return await fetch('http://localhost:3001/calendar/add', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({date,event,time}),
        })
          .then((response) => response.json())
          
  }
)

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: { calendarEvents: [], selectedDateEvents:[],selectedDate:'' },
  reducers: {
    
    getSelectedDateEvents: (state,action) =>{
      state.selectedDate = action.payload
      console.log("selected date",state.selectedDate)
      let selectedDayEvents = state.calendarEvents.filter((event) => event.date === state.selectedDate)
      state.selectedDateEvents = selectedDayEvents
      console.log("selected events",state.selectedDateEvents)
    }
  },
  extraReducers:{
    [getEvents.pending] : (state,action) =>{
      console.log('searching for events')
      
    },
    [getEvents.fulfilled] : (state,action) =>{
      console.log('found events')
      console.log(action.payload)
    },
    [getEvents.rejected] : (state,action) =>{
      console.log('something went wrong')
    },
    [addEvent.pending] : (state,action) =>{
      console.log('adding event')
      
    },
    [addEvent.fulfilled] : (state,action) =>{
      console.log('event added')
      console.log(action.payload)
    },
    [addEvent.rejected] : (state,action) =>{
      console.log('something went wrong')
    },
  }
});

export default calendarSlice.reducer;
