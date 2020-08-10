import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <>
      <div id="footer">
        <div className="footer-links-container">
          <div className="footer-links">
            <a href="#home">Home</a>
            <div className="ball"></div>
            <a href="#about">About</a>
            <div className="ball"></div>
            <a href="#resume">Resume</a>
            <div className="ball"></div>
            <a href="#recipes">Recipes</a>
            <div className="ball"></div>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <h1>&#169; Adam Zebolsky 2020</h1>
          <ul>
            <li>
              <div className="social-media">
                <div>
                  <a
                    href="https://www.linkedin.com/in/cassiebrownrd/"
                    className="fa fa-linkedin footer-social"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p>li</p>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/cassiebrownrd/"
                    className="fa fa-paper-plane footer-social"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p>li</p>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="footer-right">
            <div className="bubble">Thanks for stopping by!</div>
            <img
              src="https://i.imgur.com/jTmlUuJ.png"
              className="lena-image"
              alt="lena-the-dacschund"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
