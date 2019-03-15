import React, { Component } from "react";
import "./ContactSection.css";
import FlatButton from "../../components/FlatButton/FlatButton";
import firebase from "firebase";
import iplocation from "iplocation";
import ipify from "ipify";
require("firebase/firestore");

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  onNameChanged = event => {
    this.setState({ name: event.target.value });
    console.log(event.target.value);
  };

  onEmailChanged = event => {
    this.setState({ email: event.target.value });
    console.log(event.target.value);
  };

  onMessageChanged = event => {
    this.setState({ message: event.target.value });
    console.log(event.target.value);
  };

  onSendMessage = () => {
    ipify().then(ip => {
      iplocation(ip)
        .then(res => {
          var message = {
            ...res,
            time: Date(),
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
          };

          firebase
            .firestore()
            .collection("messages")
            .add(message)
            .then(() => {
              console.log("Successful");
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  render() {
    return (
      <div id="contact-section" className="contact-section">
        <div className="contact-section--title">
          <h1>Contact</h1>
        </div>
        <div className="contact-section--subtitle">
          <p>Want to say hello? </p>
          <p>Need technical help? </p>
          <p>Send me a message... </p>
        </div>
        <div className="contact-section--form">
          <div className="contact-section--form-name">
            <input
              type="text"
              placeholder="Enter your full name"
              onChange={this.onNameChanged}
            />
          </div>
          <div className="contact-section--form-email">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={this.onEmailChanged}
            />
          </div>
          <div className="contact-section--form-message">
            <textarea
              className="contact-section--form-message-box"
              placeholder="Leave your message..."
              rows="6"
              onChange={this.onMessageChanged}
            />
          </div>
          <div className="contact-section--form-submit">
            <FlatButton title="Send" onClick={this.onSendMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
