import React, { Component } from 'react';

export default class Videos extends Component {
  render() {

    const src="https://www.youtube.com/embed/hooKVstzbz0";
    const width = 500;
    const height = 270;

    return (
      <div id="Videos" className="Videos center-align section scrollspy">
        <h3> videos </h3>
        <iframe
          frameBorder='0'
          webkitAllowFullScreen
          src={src}
          width={width}
          height={height}
        />
      </div>
    );
  }
}
