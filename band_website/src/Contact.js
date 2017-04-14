import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div id="Contact" className="Contact center-align container section scrollspy">
        <h3> contact us </h3>
        <form>
          <div className="row">
            <div className="input-field col s6">
              <input id="visitor_name" type="text"></input>
              <label for="visitor_name"> Name </label>
            </div>
            <div className="input-field col s6">
              <input id="visitor_email" type="email" className="validate"></input>
              <label for="visitor_email" data-error="please enter an email address"> Email </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="email_subject" type="text"></input>
              <label for="email_subject"> Subject </label>
            </div>
          </div>

          <div className="row left-align">
            <div className="input-field col s12">
              <textarea id="textarea" className="materialize-textarea validate" type="text"></textarea>
              <label for="textarea" data-error="please enter a message"> Message </label>
            </div>
          </div>

          <div className="row">
            <button className="btn waves-effect waves-light" type="submit" name="action"> Send </button>
          </div>
        </form>
      </div>


    );
  }
}
