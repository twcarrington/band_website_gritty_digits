// if you've downloaded this repo, note that the index.js is being ignored by git because that's where my firebase configuration keys are
import React, { Component } from 'react';
// be aware that app.css is no longer imported here

function TopBar(props) {
  return (
    <div className="container center-align">
      <h1 className="row">The Gritty Digits</h1>

      <div className="row">
        <div className="col s2">Home</div>
        <div className="col s2">Music</div>
        <div className="col s2">Shows</div>
        <div className="col s2">Videos</div>
        <div className="col s2">Photos</div>
        <div className="col s2">Contact</div>
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
