import React from "react";
import { useState } from "react";
import "./contact.scss";
const Contact = () => {
  const [msg, setMsg] = useState(false);
  const submitHandle = (e) => {
    e.preventDefault();
    setMsg(true);
    
  };
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="container">
        <div className="left">
          <img
            src="https://cdn.dribbble.com/users/1107512/screenshots/3997677/media/0435a89ab9eea9a83e5465156053128a.gif"
            alt=""
          />
        </div>
        <div className="right">
          <form onSubmit={submitHandle}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message.."></textarea>
            <button type="submit">Send Message</button>
            {msg && <span>Thanks, for the Message! </span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
