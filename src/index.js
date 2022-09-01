import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import  recipesSlice  from './features/recipes';
import  moviesSlice  from './features/movies';
import  countrySlice  from './features/travel'
import 'bootstrap/dist/css/bootstrap.min.css';
import calendarSlice  from './features/calendar';
import userSlice  from './features/user';



const store = configureStore({
  reducer:{
    recipes:recipesSlice,
    movies:moviesSlice,
    travel:countrySlice,
    calendar:calendarSlice,
    user:userSlice
  },
  
})



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
