import React, { useState } from 'react'
import iplocation from 'iplocation'
import ip from 'ip'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

import FlatButton from '../../components/FlatButton/FlatButton'
import './ContactSection.css'

const SENT_MESSAGE = 'Your message was sent to Hung Nguyen.'

const defaultForm = {
  name: '',
  email: '',
  message: '',
}

const ContactSection = () => {
  const [form, setForm] = useState(defaultForm)

  const handleChangeForm = (event) => {
    console.log('form changed event', event.target.name)
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSendMessage = (event) => {
    event.preventDefault()

    iplocation(ip.address())
      .then((res) =>
        setDoc(doc(getFirestore(), 'messages', Date.now().toString()), {
          name: form.name,
          email: form.email,
          message: form.message,
          time: Date(),
          information: { ...res },
        })
      )
      .then(() => {
        alert(SENT_MESSAGE)
        /// Reset the contact content
        setForm(defaultForm)
      })
      .catch((error) => {
        console.log(error)
      })
  }

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
      <form
        className="contact-section--form"
        onSubmit={handleSendMessage}
        onChange={handleChangeForm}
      >
        <div className="contact-section--form-name">
          <input name="name" type="text" placeholder="Enter your full name" />
        </div>
        <div className="contact-section--form-email">
          <input name="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="contact-section--form-message">
          <textarea
            name="message"
            className="contact-section--form-message-box"
            placeholder="Leave your message..."
            rows="6"
          />
        </div>
        <div className="contact-section--form-submit">
          <FlatButton title="Send" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default ContactSection
