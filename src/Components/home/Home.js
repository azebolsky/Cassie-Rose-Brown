import React from "react";
import "./Home.css";

const home = () => {
  return (
    <section id="home">
      <div className="section parallax bg1">
        <h1>Cassie Brown</h1>
        <h3>MS RD LD</h3>
        {/* <img src="https://i.imgur.com/N9dkVfg.jpg" alt="cassie & coffee" /> */}
      </div>
      {/* <div className="section static">
        <h4>Oh hey!</h4>
      </div> */}
      <div className="section parallax bg2">
        <p>Hey! I'm Cassie, a Registered Dietitian in Dallas, TX.</p>
      </div>
    </section>
  );
};

export default home;
