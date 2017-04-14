import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div id="Contact" className="Contact center-align container section scrollspy">
        <h3> contact </h3>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate"></input>
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate"></input>
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input disabled value="I am not editable" id="disabled" type="text" class="validate"></input>
                <label for="disabled">Disabled</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate"></input>
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate"></input>
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                This is an inline input field:
                <div class="input-field inline">
                  <input id="email" type="email" class="validate"></input>
                  <label for="email" data-error="wrong" data-success="right">Email</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
