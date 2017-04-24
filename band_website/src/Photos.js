import React, { Component } from 'react';
import grittyPic from "../public/gritty_digits.jpg";
import pikminPic from "../public/pikmin.jpg";

export default class Photos extends Component {
  render() {
    return (
      <div id="Photos" className="center-align section container scrollspy">
        <h3 className="ComponentHeader"> photos </h3>
        <div className="row">

          <div className="col s5">
            <div className="card">
              <div className="card-image materialboxed">
                <img src={pikminPic}/>
              </div>
            </div>
          </div>

          <div className="col s3">
            <div className="card">
              <div className="card-image materialboxed">
                <img src={grittyPic}/>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}
