import React, { Component } from 'react';

export default class Videos extends Component {
  render() {
    return (
      <div class="video-container">
        <div id="Videos" className="center-align section scrollspy">
          <h3 className="ComponentHeader"> videos </h3>
          <iframe
            frameBorder='0'
            src="https://www.youtube.com/embed/hooKVstzbz0"
            width="900em"
            height="600em"
          />
        </div>
      </div>
    );
  }
}
