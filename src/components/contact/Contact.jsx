import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact-section">
      <div className="wrapper">
        <h2>Get in Touch</h2>
        <p className="note">Send me a note</p>
        <form>
          <div className="input-wrapper">
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email" />
          </div>
          <textarea
            rows="5"
            required
            placeholder="Tell me more about your needs..."
            style={{ height: '160px' }}
          ></textarea>
          <div className="button-wrapper">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
