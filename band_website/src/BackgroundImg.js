import React, { Component } from 'react';
import grittyPic from "../public/gritty_digits.jpg";

export default class BackgroundImg extends Component {
  render() {
    return (
      <div className="parallax-container">
        <div className="parallax">
          <img src={grittyPic} className="responsive-img"/>
        </div>
      </div>
    );
  }
}
