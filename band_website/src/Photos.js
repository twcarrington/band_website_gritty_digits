import React, { Component } from 'react';
import grittyPic from "../public/gritty_digits.jpg";
import pikminPic from "../public/pikmin.jpg";

export default class Photos extends Component {
  render() {
    return (
      <div id ="Photos" className ="row center-align section scrollspy">
        <h3 className ="ComponentHeader"> photos </h3>
        <div className="col s1"></div>
        <div className="col s10">
        </div>
        <div className="col s1"></div>
      </div>
    );
  }
}
