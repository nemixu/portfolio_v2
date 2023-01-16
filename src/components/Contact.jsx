import React, { useState } from "react";
import "../styles/ContactStyles.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, message);
    // todo - add functionality to actually send email to backend
    alert("Form submitted!");
  };

  return (
    <div className="contact-form-wrapper" id="contact">
      <form onSubmit={handleSubmit} className="text-white text-center">
        <div className="form-group">
          <label>
            Name:
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Message:
            <textarea
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>

        <button className="btn btn-success " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
