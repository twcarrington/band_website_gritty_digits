import React, { Component } from 'react';
import grittyPic from "../public/gritty_digits.jpg";
import pikminPic from "../public/pikmin.jpg";



export default class Photos extends Component {


  render() {
    return (
      <div id ="Photos" className ="center-align section scrollspy">
        <h3 className ="ComponentHeader"> photos </h3>
        <div className="carousel">
          <a className="carousel-item" href="#one!"><img src={grittyPic}/></a>
          <a className="carousel-item" href="#two!"><img src={pikminPic}/></a>
          <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/1"/></a>
          <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/2"/></a>
          <a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/3"/></a>


        </div>
      </div>
    );
  }
}
