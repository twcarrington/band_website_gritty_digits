import React, { Component } from 'react';

export default class BackgroundImg extends Component {
  render() {
    return (
      <div className="BackgroundImg parallax-container">
        <div class="parallax">
          <img src={require("../public/pikmin.jpg")}/>
        </div>
      </div>
    );
  }
}
