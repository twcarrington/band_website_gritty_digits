import React, { Component } from 'react';

export default class Photos extends Component {
  render() {
    return (
      <div id="Photos" className="Photos center-align section scrollspy">
        <h3> photos </h3>
        <img src={require("../public/gritty_digits.jpg")}/>
      </div>
    );
  }
}
