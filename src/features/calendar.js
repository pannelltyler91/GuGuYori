import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('user'))



export const getEvents = createAsyncThunk(
  'calendar/eventsGet',
  async(date) =>{
      return await fetch(`http://localhost:3001/calendar/${date.date}/${user.id}`)
          .then((response) => response.json())
          
  }

)

export const addEvent = createAsyncThunk(
  'calendar/eventAdd',
  async({date,event,time}) =>{
    
      return await fetch(`http://localhost:3001/calendar/add/${user.id}`, {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({date,event,time}),
        })
          .then((response) => response.json())
          
  }
)


export const deleteEvent = createAsyncThunk(
  'calendar/deleteEvent',
  async(event) =>{
      return await fetch(`http://localhost:3001/calendar/${user.id}/${event.id}`, {
          method: 'DELETE', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          }
         
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
      state.selectedDateEvents = action.payload.events
      
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
    [deleteEvent.pending] : (state,action) =>{
      console.log('deleting event')
      
    },
    [deleteEvent.fulfilled] : (state,action) =>{
      console.log('event deleted')
      console.log(action.payload)
      let newList =  state.selectedDateEvents.filter((item) => item.id !== action.payload.eventID)
        state.selectedDateEvents = newList
    },
    [deleteEvent.rejected] : (state,action) =>{
      console.log('something went wrong')
    },
  }
});

export default calendarSlice.reducer;
