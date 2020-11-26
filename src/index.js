import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArkfp1N5rffJOKDz80Njm-ScnX5rQFpmE",
  authDomain: "cart-789d1.firebaseapp.com",
  databaseURL: "https://cart-789d1.firebaseio.com",
  projectId: "cart-789d1",
  storageBucket: "cart-789d1.appspot.com",
  messagingSenderId: "818828361126",
  appId: "1:818828361126:web:58769229596c0cd44c2367"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

