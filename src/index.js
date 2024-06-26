import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import  countrySlice  from './features/travel'
import 'bootstrap/dist/css/bootstrap.min.css';
import calendarSlice  from './features/calendar';
import userSlice  from './features/user';


const container = document.getElementById('root');
const root = createRoot(container);

const store = configureStore({
  reducer:{
    travel:countrySlice,
    calendar:calendarSlice,
    user:userSlice
  },
  
})



root.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
