import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";

const Contact = () => {
  const [content, setContent] = useState({
    name: "",
    surname: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  });

  // handle any inputs to the form
  const handleContentChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleSubmit = (e) => {
    const passingEmail = validateEmail(content.email);
    if (passingEmail) {
      let data = {
        name: content.name + " " + content.surname,
        email: content.email,
        message: content.message,
      };
      axios
        .post("https://formcarry.com/s/6KsbLjCB1fI4", data, {
          headers: { Accept: "application/json" },
        })
        .then((response) => {
          const { data } = response;
          if (data.status === "success") {
            console.log("Message Sent");
          } else {
            console.log("Message failed to send");
          }
        })
        .catch(function (error) {
          console.log(`error ============>>>>>> ${error}`);
        });
      e.preventDefault();
      resetForm();
    } else {
      e.preventDefault();
    }
  };

  const resetForm = () =>
    setContent({
      name: "",
      surname: "",
      message: "",
      email: "",
      sent: true,
      buttonText: "Message Sent!",
    });

  const resetFormButton = () =>
    setContent({
      name: "",
      surname: "",
      message: "",
      email: "",
      sent: false,
      buttonText: "Send Message",
    });

  return (
    <section id="contact">
      <div className="transparent"></div>
      <h1>Drop Me a Line!</h1>
      <div className="contact-underline"></div>
      <form
        className="contact-form"
        autoComplete="off"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="name" className="message-name"></label>
        <input
          onChange={(event) => handleContentChange(event)}
          name="name"
          id="name"
          className="message-name"
          type="text"
          placeholder="First Name"
          value={content.name}
          required
        />

        <label htmlFor="surname" className="message-name"></label>
        <input
          onChange={(event) => handleContentChange(event)}
          name="surname"
          id="surname"
          className="message-name"
          type="text"
          placeholder="Last Name"
          value={content.surname}
          required
        />

        <label htmlFor="email" className="message-email"></label>
        <input
          onChange={(event) => {
            handleContentChange(event);
          }}
          name="email"
          id="email"
          className="message-email"
          type="email"
          placeholder="person@email.com"
          value={content.email}
          required
        />
        <label htmlFor="message" className="message"></label>
        <textarea
          onChange={(event) => handleContentChange(event)}
          name="message"
          id="message"
          className="message-input"
          type="text"
          placeholder="Please write your message here"
          pattern="/\S+@\S+\.\S+/"
          value={content.message}
          required
        />
        <div className="button--container">
          <button
            type="submit"
            className={content.sent ? "button-sent" : "button-contact"}
          >
            {content.buttonText}
          </button>
          <button onClick={resetFormButton} className="button-reset">
            Reset Form
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
