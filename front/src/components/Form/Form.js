import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <form action="#">
        <div className="bg"></div>
        <h2 className="contact-us_title">WE'D LOVE TO HEAR FROM <span className="contact-us_span">YOU</span>!</h2>
        <hr/>
        <div className="form-wrapper">
          <div className="name-input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name..." required/>
          </div>
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email..." required/>
          </div>
          <div className="address-label">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Your address"/>
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input type="text" id="mobile" placeholder="Your number..."/>
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea placeholder="Enter your message here..."></textarea>
          </div>
          <button className="contact-us_submit" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
