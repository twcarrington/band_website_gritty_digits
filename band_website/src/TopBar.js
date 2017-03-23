import React, { Component } from 'react';

export default class TopBar extends Component {
  render() {
    return (
      <div className="TopBar center-align">
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
}
