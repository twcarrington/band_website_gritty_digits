import React, { Component } from 'react';
import TopBar from './TopBar.js';
import Music from './Music.js';
import Shows from './Shows.js';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <Music/>
        <Shows/>
      </div>
    );
  }
}
