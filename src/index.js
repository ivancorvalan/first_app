import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import UploadProducts from './Components/UploadProducts/UploadProducts';*/

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDqzmUYAB3M7qPgsPs8og8_u7ranYu9d8Q",
  authDomain: "asistlegal-364a0.firebaseapp.com",
  projectId: "asistlegal-364a0",
  storageBucket: "asistlegal-364a0.appspot.com",
  messagingSenderId: "640997414806",
  appId: "1:640997414806:web:dc899e27fd0bba931b6fb7"
};

initializeApp(firebaseConfig)

//UploadProducts()

ReactDOM.render(
  <React.StrictMode>
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
      rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
      rel="stylesheet" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
