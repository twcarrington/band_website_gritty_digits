import React, { Component } from 'react';
import grittyPic from "../public/gritty_digits.jpg";
import pikminPic from "../public/pikmin.jpg";



export default class Photos extends Component {


  render() {
    return (
      <div id ="Photos" className ="center-align section scrollspy">
        <h3 className ="ComponentHeader"> photos </h3>
				<div className="row">
          <img className="col s6 responsive-img" src={grittyPic}/>
          <img className="col s6 responsive-img" src={pikminPic}/>
        </div>
      </div>
    );
  }
}
