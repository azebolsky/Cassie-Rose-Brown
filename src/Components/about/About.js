import React from "react";
import "./About.css";

const about = () => {
  return (
    <section id="about">
      <h1>Hello There!</h1>
      <div className="underline-about"></div>
      <div className="about-content">
        <p>
          Hello! I'm Cassie Brown, a Registered Dietian in Dallas, TX.
          Currently, I am taking care of patients who are critically ill in the
          ICU, as well as those in the oncology unit. I am continually reading
          and learning about how I can provide the best nutrition care and
          support to my patients. As well as reading as many innovative research
          articles I can get my hands on, I am studying to obtain my CNSC
          certification and am taking the exam later this year. In my current
          position, I am assisting with ERAS protocol implementation, as well as
          ECMO and COVID 19 nutrition support guidelines. Thanks for stopping
          by!!
        </p>
        <img
          src="https://i.imgur.com/VMRb5Gl.png"
          className="cat-dog"
          alt="cats and dogs"
        />
        <p className="hobbies">
          Hobbies: dachshaunds, nachos, gardening, house plants, cats,
          dachshunds, Adam, Lincoln Nebraska, records, concerts, and dachshunds.
        </p>
      </div>
    </section>
  );
};

export default about;
