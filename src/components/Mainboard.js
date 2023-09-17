import React from "react";
import "./Mainboard.css";
import Pin from "./Pin";

function Mainboard(props) {
  let { pins } = props;

  return (
    <div className="mainboard">
      <div className="mainboard__content">
        {pins.map((pin, index) => {
          let { urls } = pin;
          return <Pin key={index} urls={urls} />;
        })}
        
      </div>
    </div>
  );
}

export default Mainboard;
