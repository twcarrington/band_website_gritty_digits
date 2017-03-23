import React, { Component } from 'react';

export default class TopBar extends Component {
  render() {
    return (
      <div className="TopBar center-align">
        <h1 className="row">The Gritty Digits</h1>

        <div className="row">
          <div className="col s2 hoverable">Home</div>
          <div className="col s2 hoverable">Music</div>
          <div className="col s2 hoverable">Shows</div>
          <div className="col s2 hoverable">Videos</div>
          <div className="col s2 hoverable">Photos</div>
          <div className="col s2 hoverable">Contact</div>
        </div>
      </div>
    );
  }
}
