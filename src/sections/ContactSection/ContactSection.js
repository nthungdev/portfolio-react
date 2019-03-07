import React, { Component } from "react";
import "./ContactSection.css";
import FlatButton from "../../components/FlatButton/FlatButton";
import Footer from "../../components/Footer/Footer";

class ContactSection extends Component {
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
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="contact-section--form-email">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="contact-section--form-message">
            <textarea
              className="contact-section--form-message-box"
              placeholder="Leave your message..."
              rows="6"
            />
          </div>
          <div className="contact-section--form-submit">
            <FlatButton title="Send" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
