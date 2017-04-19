import React, { Component } from 'react';

export default class BackgroundImg extends Component {
  render() {
    return (
      <div className="parallax-container">
        <div className="parallax">
          <img src={require("../public/pikmin.jpg")}/>
        </div>
      </div>
    );
  }
}
