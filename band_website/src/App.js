import React, { Component } from 'react';
import TopBar from './TopBar.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <TopBar/>
        </div>
      </div>
    );
  }
}
