/*
  File name: contact.jsx
  Student's Name: Yuen Chi Tse
  StudentID: 301333561
  Date: 01/28/2024
*/

import React from "react";

export default function Contact() {
  //function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Capture form data
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());
    console.log(formJSON);
    // Show message box
    window.alert("Thanks for your message, I will reply with you ASAP!");
    // Redirect to home page
    window.location.href = "/";
  };

  return (
    <>
      <h1 className="page-header">Contact Me</h1>
      <div className="contact-panel">
        <h2>My Contact Information</h2>
        <p>
          <strong>Email: </strong>victortseyc@gmail.com
        </p>
        <p>
          <strong>Phone: </strong>(647) 523-8998
        </p>

        <a
          href="https://www.linkedin.com/in/victor-tse-yc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="contact-panel">
        <h2>Leave Me A Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label className="contact-label">
            <span>First Name:</span>
            <input type="text" name="firstName" required />
          </label>
          <br />
          <label className="contact-label">
            <span>Last Name:</span>{" "}
            <input type="text" name="lastName" required />
          </label>
          <br />
          <label className="contact-label">
            <span>Contact Number:</span>
            <input type="tel" name="contactNumber" required />
          </label>
          <br />
          <label className="contact-label">
            <span>Email Address:</span>
            <input type="email" name="email" required />
          </label>
          <br />
          <label className="contact-label">
            <span>Message:</span>
            <textarea name="message" required></textarea>
          </label>
          <br />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}
