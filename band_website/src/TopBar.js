import React, { Component } from 'react';

export default class TopBar extends Component {
  render() {
    return (
      <div className="TopBar center-align">
        <div>
          <h1 className="row"> The Gritty Digits </h1>
        </div>

        <div className="row">
          <div className="TopBarItem col s2 hoverable">
            <a href="#Home"> Home </a>
          </div>
          <div className="TopBarItem col s2 hoverable">
            <a href="#Music"> Music </a>
          </div>
          <div className="TopBarItem col s2 hoverable">
            <a href="#Shows"> Shows </a>
          </div>
          <div className="TopBarItem col s2 hoverable">
            <a href="#Videos"> Videos </a>
          </div>
          <div className="TopBarItem col s2 hoverable">
            <a href="#Photos"> Photos </a>
          </div>
          <div className="TopBarItem col s2 hoverable">
            <a href="#Contact"> Contact </a>
          </div>
        </div>
      </div>
    );
  }
}
