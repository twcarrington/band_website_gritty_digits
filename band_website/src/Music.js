import React, { Component } from 'react';

export default class Music extends Component {
  render() {
    return (
      <div id="Music" className="Music center-align section scrollspy">
        <h3> music </h3>
        <iframe
          width="75%"
          height="250"
          scrolling="no"
          frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/300143899&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
        />
      </div>
    );
  }
}
