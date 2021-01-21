import React from "react";
import "./style.css";

function Display(props) {
  return (
    <div className="display text-center" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
      {props.children}
    </div>
  );
}

export default Display;