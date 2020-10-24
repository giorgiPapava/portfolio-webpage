import React from 'react';
import { useInView } from 'react-intersection-observer';

import ContactImage from '../../images/contact.jpg';

import './Contact.scss';

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div
      className="contact-section"
      ref={ref}
      style={inView ? { backgroundImage: `url(${ContactImage})` } : null}
    >
      <div className="wrapper">
        <h2>Get in Touch</h2>
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
