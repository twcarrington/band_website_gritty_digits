import React, { Component } from 'react';

export default class Photos extends Component {
  render() {
    return (
      <div id="Photos" className="center-align section scrollspy">
        <h3 className="ComponentHeader"> photos </h3>
        <img src={require("../public/gritty_digits.jpg")}/>
      </div>
    );
  }
}
