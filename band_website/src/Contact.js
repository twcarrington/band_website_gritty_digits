import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitorName: "",
      visitorEmail: "",
      emailSubject: "",
      emailBody: ""
    };

    this.changeVisitorName = this.changeVisitorName.bind(this);
    this.changeVisitorEmail = this.changeVisitorEmail.bind(this);
    this.changeEmailSubject = this.changeEmailSubject.bind(this);
    this.changeEmailBody = this.changeEmailBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeVisitorName(event) {
    this.setState({visitorName: event.target.value});
  }

  changeVisitorEmail(event) {
    this.setState({visitorEmail: event.target.value});
  }

  changeEmailSubject(event) {
    this.setState({emailSubject: event.target.value});
  }

  changeEmailBody(event) {
    this.setState({emailBody: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="Contact" className="Contact container section scrollspy">
        <h3 className="center-align"> contact us </h3>

        <form onSubmit={this.handleSubmit} className="left-align">
          <div className="row">
            <div className="input-field col s6">
              <input type="text" value={this.state.visitorName} onChange={this.changeVisitorName}></input>
              <label> Name </label>
            </div>

            <div className="input-field col s6">
              <input type="email" className="validate" value={this.state.visitorEmail} onChange={this.changeVisitorEmail}></input>
              <label data-error="please enter an email address"> Email </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input type="text" value={this.state.emailSubject} onChange={this.changeEmailSubject}></input>
              <label> Subject </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea className="materialize-textarea validate" type="text" value={this.state.emailBody} onChange={this.changeEmailBody}></textarea>
              <label data-error="please enter a message"> Message </label>
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
