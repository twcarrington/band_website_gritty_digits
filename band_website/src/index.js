import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAGYJbD6QeCZqfO-ZE1s_1Z0Ev076paTRM",
  authDomain: "gritty-digits.firebaseapp.com",
  databaseURL: "https://gritty-digits.firebaseio.com",
  storageBucket: "gritty-digits.appspot.com",
  messagingSenderId: "920703026006"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
