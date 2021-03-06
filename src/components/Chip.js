import React from "react";
import ChipStyle from "./styles/ChipStyle";
import { motion } from "framer-motion";

const Chip = props => {
  const chip = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  var colors = {
    darkSky:
      "linear-gradient(90deg, rgba(19,15,88,1) 0%, rgba(22,51,73,1) 100%)",
    dawn:
      "linear-gradient(180deg, rgba(89,9,121,1) 0%, rgba(58,107,143,1) 100%)",
    sunrise: "linear-gradient(130deg, #d53369 0%, #daae51 100%)",
    sunset:
      "linear-gradient(90deg, rgba(214,83,110,1) 0%, rgba(63,94,251,1) 100%)"
  };

  let hue;
  let time = props.time;
  let digit = parseInt(time);
  if (time.search("am") > 0) {
    if (digit >= 12 || digit < 5) hue = colors.darkSky;
    else if (digit >= 5 && digit < 7) hue = colors.dawn;
    else if (digit >= 7) hue = colors.sunrise;
  }
  if (time.search("pm") > 0) {
    if (digit >= 12 || digit <= 3) hue = colors.sunrise;
    else if (digit > 3 && digit <= 7) hue = colors.sunset;
  }

  return (
    <ChipStyle bgColor={hue}>
      <motion.div
        whileHover={{
          transition: { duration: 0.1, type: "spring" },
          scale: 1.0
        }}
        whileTap={{ y: -5 }}
        initial="hidden"
        animate="visible"
        variants={chip}
        transition={{
          delay: props.delay,
          x: { type: "spring", stiffness: 500 },
          default: { duration: 1 }
        }}
      >
        {props.time}
      </motion.div>
    </ChipStyle>
  );
};

export default Chip;
