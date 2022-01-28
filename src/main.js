import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA5n4C-KSXOyyuFk2tQ1mHmPIucokwMUFI",
  authDomain: "arauca-reactjs.firebaseapp.com",
  projectId: "arauca-reactjs",
  storageBucket: "arauca-reactjs.appspot.com",
  messagingSenderId: "245207381144",
  appId: "1:245207381144:web:bbe7a497508892188a8ced"
};

initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);