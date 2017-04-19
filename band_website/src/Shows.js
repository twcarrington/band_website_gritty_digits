import React, { Component } from 'react';

export default class Shows extends Component {
  render() {
    return (
      <div id="Shows" className="center-align section scrollspy">
        <h3 className="componentHeader"> shows </h3>
        <iframe
          src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=40eu1acut8kauke1iofd87osf8%40group.calendar.google.com&amp;color=%2323164E&amp;ctz=America%2FNew_York"
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no">
        </iframe>
      </div>
    );
  }
}
