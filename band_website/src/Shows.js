import React, { Component } from 'react';

export default class Shows extends Component {
  render() {
    return (
      <div id="Shows" className="Shows center-align section scrollspy">
        <h3> shows </h3>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=40eu1acut8kauke1iofd87osf8%40group.calendar.google.com&ctz=America/New_York"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no">
        </iframe>
      </div>
    );
  }
}
