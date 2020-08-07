import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <>
      <div id="footer">
        <h1>&#169; Adam Zebolsky 2020</h1>

        <div className="footer-links-container">
          <div className="footer-links">
            <div>
              <a href="#home">Home</a>
              <a href="#about">About</a>
            </div>
            <div>
              <a href="#resume">Resume</a>
              <a href="#recipes">Recipes</a>
            </div>
            <div>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="bubble">Thanks for stopping by!</div>
          <img
            src="https://i.imgur.com/jTmlUuJ.png"
            className="lena-image"
            alt="lena-the-dacschund"
          />
        </div>
      </div>
    </>
  );
};

export default footer;
