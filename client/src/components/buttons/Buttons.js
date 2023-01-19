import * as React from "react";
import "../../assets/CSS/Buttons.css";
const Buttons = (props) => {
  return (
    <button className={`buttons ${props.className || ""}`}>
      {props.button || "Les actus du moments"}
    </button>
  );
};
export default Buttons;
