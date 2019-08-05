import React from "react";
import TimeFormatStyles from "./styles/TimeFormatStyles";
import { motion } from "framer-motion";

const TimeFormat = props => {
  const format = props.format;

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
  var hide = "none";
  console.log(`props input: ${props.input}`);
  if (props.input) {
    hide = "flex";
  }
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return (
    <TimeFormatStyles hidden={hide}>
      <motion.div initial="hidden" animate="visible" variants={variants}>
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
      </motion.div>
    </TimeFormatStyles>
  );
};

export default TimeFormat;
