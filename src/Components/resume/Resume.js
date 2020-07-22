import React from "react";
import "./Resume.css";

const resume = () => {
  return (
    <section id="resume">
      <h1>Experience</h1>
      <div className="timeline">
        <div className="experience-container left">
          <div className="experience-logo">
            <img
              src="https://i.imgur.com/HCL9WeE.png?1"
              alt="Texoma Medical Center Logo"
            ></img>
          </div>
          <div className="experience-section">
            <h3>Clinical Dietitian</h3>
            <h4>Texoma Medical Center</h4>
            <p>
              Critical care Dietitian currently caring for patients in the
              Cardiovascular ICU, COVID-19 ICU, general ICU, and oncology.
            </p>
            <p>July 2019 - Present</p>
          </div>
        </div>
        <div className="experience-container right">
          <div className="experience-logo">
            <img
              src="https://i.imgur.com/SDUDwdD.png?3"
              alt="Dallas Medical Center Logo"
            ></img>
          </div>
          <div className="experience-section">
            <h3>Clinical Dietitian</h3>
            <h4>Dallas Medical Center</h4>
            <p>March 2020 - Present</p>
          </div>
        </div>
        <div className="experience-container left">
          <div className="experience-logo">
            <img
              src="https://i.imgur.com/MRcmg9M.png"
              alt="Dallas Medical Center Logo"
            ></img>
          </div>
          <div className="experience-section">
            <h3>Registered Dietitian</h3>
            <h4>Portrait Health Centers</h4>
            <p>July 2019 - April 2020</p>
          </div>
        </div>
        <div className="experience-container right">
          <div className="experience-logo">
            <img
              src="https://i.imgur.com/MtZIpeb.png?1"
              alt="Texas Woman's University Logo"
            ></img>
          </div>
          <div className="experience-section">
            <h3>Graduate Assistant</h3>
            <h4>Texas Woman's University</h4>
            <p>Aug 2017 - May 2018</p>
          </div>
        </div>
      </div>
      <h1>Educations</h1>
      <div>
        <div className="experience-container">
          <div className="experience-logo">
            <img
              src="https://i.imgur.com/MtZIpeb.png?1"
              alt="Texas Woman's University Logo"
            ></img>
          </div>
          <div className="experience-section">
            <h3>Texas Woman's University</h3>
            <p>Master's in Dietetics</p>
            <p>2017-2019</p>
          </div>
        </div>
        <div className="experience-container">
          <div className="experience-logo">
            <img
              src="https://i.imgur.com/H5eUtof.png"
              alt="University of Nebraska Lincoln Logo"
            ></img>
          </div>
          <div className="experience-section">
            <h3>University of Nebraska at Lincoln</h3>
            <p>Bachelor's in Nutrition Science</p>
            <p>2012-2015</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default resume;
