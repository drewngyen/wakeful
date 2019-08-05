import React from "react";
import TimeFormatStyles from "./styles/TimeFormatStyles";

const TimeFormat = props => {
  const format = props.format;
  console.log(format);
  var military = document.getElementById("mil");
  var pmBtn = document.getElementById("pm");
  if (format) {
    military.classList.remove("active");
    pmBtn.classList.add("active");
  }
  function toggle() {
    var m24 = document.getElementById("mil");
    var pm = document.getElementById("pm");
    m24.classList.add("active");
    pm.classList.remove("active");
  }
  return (
    <TimeFormatStyles>
      <div>
        <button
          id="mil"
          className="active"
          onClick={e => {
            toggle();
            props.default();
          }}
        >
          24-Hour
        </button>
        <button id="pm" onClick={props.submit}>
          PM
        </button>
      </div>
    </TimeFormatStyles>
  );
};

export default TimeFormat;
