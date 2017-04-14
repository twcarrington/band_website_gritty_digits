import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div id="Contact" className="Contact center-align container section scrollspy">
        <h3> contact </h3>
        <div className="row">
          <form className="col s12">

            <div className="input-field col s6">
              <input id="visitor_name" type="text"></input>
              <label for="visitor_name"> Name </label>
            </div>

            <div className="input-field col s6">
              <input id="visitor_email" type="email" className="validate"></input>
              <label for="visitor_name"> Email </label>
            </div>
            
          </form>
        </div>

      </div>
    );
  }
}
