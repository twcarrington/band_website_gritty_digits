import React, { Component } from 'react';
import TopBar from './TopBar.js';
import BackgroundImg from './BackgroundImg.js';
import Music from './Music.js';
import Shows from './Shows.js';
import Videos from './Videos.js';
import Photos from './Photos.js';
import Contact from './Contact.js';
import $ from 'jquery';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <TopBar/>
        <BackgroundImg/>
        <Music/>
        <Shows/>
        <Videos/>
        <Photos/>
        <Contact/>
      </div>
    );
  }
}
