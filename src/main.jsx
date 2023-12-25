import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraBaseProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGY0kgBjd5PK-qh_d1lo_aQ2iIs8nXSPg",
  authDomain: "comi-sabado.firebaseapp.com",
  projectId: "comi-sabado",
  storageBucket: "comi-sabado.appspot.com",
  messagingSenderId: "1056527070878",
  appId: "1:1056527070878:web:e745567739f802abe8ad8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraBaseProvider>
    <App /> 
  </ChakraBaseProvider>
)
