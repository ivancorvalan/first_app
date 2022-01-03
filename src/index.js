import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import UploadProducts from './Components/UploadProducts/UploadProducts';*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB2lupxJbADORyBUooOhtERKN_mGao48as",
  authDomain: "first-app-222b0.firebaseapp.com",
  projectId: "first-app-222b0",
  storageBucket: "first-app-222b0.appspot.com",
  messagingSenderId: "950962693632",
  appId: "1:950962693632:web:eb2ed630611351395a5ae5"
};

initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
