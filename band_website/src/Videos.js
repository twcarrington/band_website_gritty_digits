import React, { Component } from 'react';

export default class Videos extends Component {
  render() {
    return (
      <div id="Videos" className="center-align section scrollspy container">
        <h3 className="ComponentHeader"> videos </h3>
        <iframe className="video-embed"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTheGrittyDigits%2Fvideos%2Fvb.192716991205538%2F193240841153153%2F%3Ftype%3D3&show_text=0&width=560"
          frameBorder="0" //for some reason this doesn't work when I have it in my CSS file instead
        />
      </div>
    );
  }
}
