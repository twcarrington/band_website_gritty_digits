import React, { Component } from 'react';
import pikminPic from "../public/pikmin.jpg";

export default class BackgroundImg extends Component {
  render() {
    return (
      <div className="parallax-container">
        <div className="parallax">
          <img src={pikminPic}/>
        </div>
      </div>
    );
  }
}
