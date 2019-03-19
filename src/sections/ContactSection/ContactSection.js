import React, { Component } from "react";
import "./ContactSection.css";
import FlatButton from "../../components/FlatButton/FlatButton";
import firebase from "firebase/app";
import "firebase/firestore";
import iplocation from "iplocation";
import ipify from "ipify";

const SENT_MESSAGE = "Your message was sent to Hung Nguyen.";

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

  onSendMessage = event => {
    ipify().then(ip => {
      iplocation(ip)
        .then(res => {
          var message = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            time: Date(),
            information: {
              ...res
            }
          };

          const messagesRef = firebase.firestore().collection("messages");

          messagesRef
            .doc(Date.now().toString())
            .set(message)
            .then(() => {
              console.log("Successful");
              alert(SENT_MESSAGE);
              /// Reset the contact content
              this.setState({
                name: "",
                email: "",
                message: ""
              });
            });
        })
        .catch(err => {
          console.log(err);
        });
    });

    event.preventDefault();
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
        <form className="contact-section--form" onSubmit={this.onSendMessage}>
          <div className="contact-section--form-name">
            <input
              type="text"
              placeholder="Enter your full name"
              onChange={this.onNameChanged}
              value={this.state.name}
            />
          </div>
          <div className="contact-section--form-email">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={this.onEmailChanged}
              value={this.state.email}
            />
          </div>
          <div className="contact-section--form-message">
            <textarea
              className="contact-section--form-message-box"
              placeholder="Leave your message..."
              rows="6"
              onChange={this.onMessageChanged}
              value={this.state.message}
            />
          </div>
          <div className="contact-section--form-submit">
            <FlatButton
              title="Send"
              // onClick={this.onSendMessage}
              type="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactSection;
