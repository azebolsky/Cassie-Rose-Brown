import React from "react";
import "./Hamburger.css";

const hamburger = (props) => {
  return (
    <button
      className="toggle-button hamburger"
      onClick={props.drawerToggleClickHandler}
    >
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  );
};

export default hamburger;
