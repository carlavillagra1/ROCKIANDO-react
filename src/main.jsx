import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQPxeVHHbAA6R_90qIKi14eGYnmFV9-Cw",
  authDomain: "rockiandosport-90db9.firebaseapp.com",
  projectId: "rockiandosport-90db9",
  storageBucket: "rockiandosport-90db9.appspot.com",
  messagingSenderId: "575386884959",
  appId: "1:575386884959:web:e3469dd4bca8231bde34ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
