import React from "react";
import "./Home.css";

const home = () => {
  return (
    <>
      {/* <section id="home">
        <h1>Cassie Brown</h1>
        <h3>MS RD LD</h3>
        <p>Hey! I'm Cassie, a Registered Dietitian in Dallas, TX.</p>
        <div className="pic-container">
          <div className="offset"></div>
          <img
            className="cassie-image"
            src="https://i.imgur.com/N9dkVfg.jpg"
            alt="cassie"
          />
        </div>
      </section> */}
      <section id="home">
        <div className="home-heading">
          <h1>Cassie Brown</h1>
          <h3>MS RD LD</h3>
          <p>Hey! I'm Cassie, a Registered Dietitian in Dallas, TX.</p>
        </div>
        <div className="pic-container">
          <img
            className="cassie-image"
            src="https://i.imgur.com/N9dkVfg.jpg"
            alt="cassie"
          />
        </div>
      </section>
    </>
  );
};

export default home;
