// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-WM1ZUk0TYd0GO-HofQJTQmKUSjDjOhg",
  authDomain: "ggy24-63351.firebaseapp.com",
  projectId: "ggy24-63351",
  storageBucket: "ggy24-63351.appspot.com",
  messagingSenderId: "14826642235",
  appId: "1:14826642235:web:23b5392abdcdc2df7f351e",
  measurementId: "G-CRFMS4X5KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);