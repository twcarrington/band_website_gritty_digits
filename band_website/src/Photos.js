import React, { Component } from 'react';
import grittyPic from "../public/gritty_digits.jpg";
import pikminPic from "../public/pikmin.jpg";

export default class Photos extends Component {
  render() {
    return (
      <div id ="Photos" className ="row center-align section scrollspy">
        <h3 className ="ComponentHeader"> photos </h3>
        <div className="col s1"></div>
        <div className="slider col s10">
          <ul className="slides">
            <li>
              <img src="http://lorempixel.com/580/250/nature/1"/>
            </li>
            <li>
              <img src="http://lorempixel.com/580/250/nature/2"/>
            </li>
            <li>
              <img src="http://lorempixel.com/580/250/nature/3"/>
            </li>
          </ul>
        </div>
        <div className="col s1"></div>
      </div>
    );
  }
}
