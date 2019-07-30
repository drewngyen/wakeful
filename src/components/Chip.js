import React, { Component } from "react";
import ChipStyle from "./styles/ChipStyle";
import { motion } from "framer-motion";

export default class Chip extends Component {
  render() {
    const chip = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    };

    return (
      <ChipStyle hue={this.props.time}>
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
            delay: this.props.delay,
            x: { type: "spring", stiffness: 500 },
            default: { duration: 1 }
          }}
        >
          {this.props.time}
        </motion.div>
      </ChipStyle>
    );
  }
}
