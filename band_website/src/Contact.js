import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitorName: '',
      visitorEmail: ''
    };

    this.changeVisitorName = this.changeVisitorName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeVisitorName(event) {
    this.setState({visitorName: event.target.value});
  }

  changeVisitorEmail(event) {
    this.setState({visitorEmail: event.target.value});
  }

  handleSubmit(event) {
    alert('submitted:' + this.state.visitorName + this.state.visitorEmail);
    event.preventDefault();
  }

  render() {
    return (
      <div id="Contact" className="Contact left-align container section scrollspy">
        <h3> contact us </h3>

        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input type="text" value={this.state.visitorName} onChange={this.changeVisitorName}></input>
              <label htmlFor="visitorName"> Name </label>
            </div>

            <div className="input-field col s6">
              <input id="visitorEmail" type="email" className="validate" value={this.state.visitorEmail} onChange={this.changeVisitorEmail}></input>
              <label htmlFor="visitorEmail" data-error="please enter an email address"> Email </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="email_subject" type="text"></input>
              <label htmlFor="email_subject"> Subject </label>
            </div>
          </div>

          <div className="row left-align">
            <div className="input-field col s12">
              <textarea id="textarea" className="materialize-textarea validate" type="text"></textarea>
              <label htmlFor="textarea" data-error="please enter a message"> Message </label>
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
