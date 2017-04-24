import React, { Component } from 'react';
import grittyPoster from "../public/grittyPoster.jpg";

export default class TopBar extends Component {
  render() {
    return (
      <div className="TopBar center-align">
        <div className="row">
          <img src={grittyPoster}/>
        </div>

        <div className="row">
          <div className="col s1"></div>
          <div className="TopBarItem col s2">
            <a href="#Music"> Music </a>
          </div>
          <div className="TopBarItem col s2">
            <a href="#Shows"> Shows </a>
          </div>
          <div className="TopBarItem col s2">
            <a href="#Videos"> Videos </a>
          </div>
          <div className="TopBarItem col s2">
            <a href="#Photos"> Photos </a>
          </div>
          <div className="TopBarItem col s2">
            <a href="#Contact"> Contact </a>
          </div>
          <div className="col s1"></div>
        </div>
      </div>
    );
  }
}
