import React, { Component } from 'react';
import grittyPic from "../public/gritty_digits.jpg";
import grittyPosterWhole from "../public/grittyPosterWhole.jpg";

export default class Photos extends Component {
  render() {
    return (
      <div id="Photos" className="center-align section container scrollspy">
        <h3 className="ComponentHeader"> photos </h3>
        <div className="row">

          <div className="col l4 s6">
            <div className="card">
              <div className="card-image materialboxed">
                <img src={grittyPosterWhole}/>
              </div>
            </div>
          </div>

          <div className="col l4 s6">
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
