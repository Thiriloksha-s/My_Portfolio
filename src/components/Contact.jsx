import React from 'react';
import './css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Get In Touch</h1>
      <div className="contact-form-container">
        <form action="https://getform.io/f/axojmylb" method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Enter your name" className="contact-input" />
          <input type="text" name="email" placeholder="Enter your email" className="contact-input" />
          <textarea name="message" placeholder="Enter your message" rows="10" className="contact-textarea"></textarea>
          <button className="contact-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
