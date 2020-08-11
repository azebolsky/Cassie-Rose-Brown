import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import "semantic-ui-css/semantic.min.css";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";

const Contact = ({ backToTop }) => {
  const [content, setContent] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  });

  // handle any inputs to the form
  const handleContentChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/send", {
        name: content.firstName + " " + content.lastName,
        email: content.email,
        message: content.message,
      })
      .then((response) => {
        if (response.data.msg === "success") {
          alert("Message Sent");
          resetForm();
        } else if (response.data.msg === "fail") {
          alert("Message failed to send");
        }
      });
  };

  const resetForm = () =>
    setContent({
      firstName: "",
      lastName: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });

  return (
    <section id="contact">
      <h1>Have a question? Want to say hi?</h1>
      <h1>Message me!</h1>
      <form
        className="contact-form"
        onSubmit={(event) => handleSubmit(event)}
        method="POST"
        action="/contact"
      >
        <label className="message">Your Message</label>
        <textarea
          onChange={(event) => handleContentChange(event)}
          name="message"
          className="message-input"
          type="text"
          placeholder="Please write your message here"
          value={content.message}
          required
        />

        <label className="message-name">First Name</label>
        <input
          onChange={(event) => handleContentChange(event)}
          name="firstName"
          className="message-name"
          type="text"
          placeholder="First Name"
          value={content.firstName}
        />

        <label className="message-name">Last Name</label>
        <input
          onChange={(event) => handleContentChange(event)}
          name="lastName"
          className="message-name"
          type="text"
          placeholder="Last Name"
          value={content.lastName}
        />

        <label className="message-email">Your Email</label>
        <input
          onChange={(event) => handleContentChange(event)}
          name="email"
          className="message-email"
          type="email"
          placeholder="your@email.com"
          required
          value={content.email}
        />

        <div className="button--container">
          <button type="submit" className="button button-primary">
            {content.buttonText}
          </button>
        </div>
      </form>

      {/* <Form onSubmit={handleSubmit}>
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First name"
          htmlFor="first"
          placeholder="First name"
          name="firstName"
          value={content.firstName}
          onChange={(event) => handleContentChange(event)}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last name"
          placeholder="Last name"
          name="lastName"
          value={content.lastName}
          onChange={(event) => handleContentChange(event)}
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          placeholder="Message"
          name="message"
          value={content.message}
          onChange={(event) => handleContentChange(event)}
        />
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="coolperson@email.com"
          name="email"
          value={content.email}
          onChange={(event) => handleContentChange(event)}
          // error={{
          //   content: "Please enter a valid email address",
          //   pointing: "below",
          // }}
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content={content.buttonText}
          label=""
          color="green"
          onClick={handleSubmit}
        />
      </Form> */}
    </section>
  );
};

export default Contact;
