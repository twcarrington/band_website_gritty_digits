import React, { Component } from 'react';

export default class TopBar extends Component {
  render() {
    return (
      <div className="TopBar z-depth-5 center-align">
        <h1 className="row">The Gritty Digits</h1>

        <div className="row">
          <div className="TopBarItem col s2 hoverable">Home</div>
          <div className="TopBarItem col s2 hoverable">Music</div>
          <div className="TopBarItem col s2 hoverable">Shows</div>
          <div className="TopBarItem col s2 hoverable">Videos</div>
          <div className="TopBarItem col s2 hoverable">Photos</div>
          <div className="TopBarItem col s2 hoverable">Contact</div>
        </div>
      </div>
    );
  }
}
