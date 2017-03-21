import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function TopBar(props) {
  return (
    <div>
      <h1>The Gritty Digits</h1>

      <table align="center">
        <tr>
          <td>Home</td>
          <td>Music</td>
          <td>Shows</td>
          <td>Videos</td>
          <td>Photos</td>
          <td>Contact</td>
        </tr>
      </table>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="TopBar">
          <img src={logo} className="App-logo" alt="logo" />
          <TopBar/>
        </div>
      </div>
    );
  }
}

export default App;
