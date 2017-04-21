import React, { Component } from 'react';
import grittyPic from "../public/gritty_digits.jpg"


export default class Photos extends Component {
  render() {
    return (
      <div id="Photos" className="center-align section scrollspy">
        <h3 className="ComponentHeader"> photos </h3>
        <img src={grittyPic}/>
      </div>
    );
  }
}
