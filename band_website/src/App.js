import React, { Component } from 'react';
import './App.css';
import 

function TopBar(props) {
  return (
    <div>
      <h1 className="row">The Gritty Digits</h1>

      <div className="row">
        <div className="col s6 m6 l6">Home</div>
        <div className="col s6 m6 l6">Music</div>
      </div>
    </div>
  );
}

class App extends Component {
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

export default App;
