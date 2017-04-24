import React, { Component } from 'react';
import grittyPoster from "../public/grittyPoster.jpg";

export default class TopBar extends Component {
  render() {
    return (
      <div className="TopBar center-align">
        <div className="row">
          <img src={grittyPoster} className="responsive-img"/>
        </div>

        <div className="row container">
          <div className="col s1"></div>
          <div className="TopBarItem col l2 s4">
            <a href="#Music"> Music </a>
          </div>
          <div className="TopBarItem col l2 s4">
            <a href="#Shows"> Shows </a>
          </div>
          <div className="TopBarItem col l2 s4">
            <a href="#Videos"> Videos </a>
          </div>
          <div className="TopBarItem col l2 s4">
            <a href="#Photos"> Photos </a>
          </div>
          <div className="TopBarItem col l2 s4">
            <a href="#Contact"> Contact </a>
          </div>
          <div className="col s1"></div>
        </div>
      </div>
    );
  }
}
