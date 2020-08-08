import React from "react";
import "./Backdrop.css";

const backdrop = (props) => {
  return (
    <div
      className={props.show ? "backdrop" : "backdrop-closed"}
      onClick={props.click}
    ></div>
  );
};

export default backdrop;
