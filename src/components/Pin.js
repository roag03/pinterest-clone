import React, { useState } from "react";
import "./Pin.css";

function Pin(props) {
  const [vary, setVary] = useState("not-active");
  let { urls } = props;
  return (
    <div className="pin">
      <div className="pin__images">
        <a
          href=""
          className={`${vary}`}
        
          onMouseEnter={() => {
            setVary("pin__downloadBtn");
          }}
          onMouseLeave={() => {
            setVary("not-active");
          }}
        >
          Save
        </a>
        <img
          src={urls?.regular}
          alt="pin"
          
          onMouseEnter={() => {
            setVary("pin__downloadBtn");
          }}
          onMouseLeave={() => {
            setVary("not-active");
          }}
        />
      </div>
    </div>
  );
}

export default Pin;
