import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbRZvCEN74IaSyfeQH5Z-eYMHmyQKls0g",
  authDomain: "proyecto-43625.firebaseapp.com",
  projectId: "proyecto-43625",
  storageBucket: "proyecto-43625.appspot.com",
  messagingSenderId: "63346559928",
  appId: "1:63346559928:web:3efe70bd6641282962dd4d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);
