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
      <ChipStyle>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={chip}
          transition={{
            delay: this.props.delay,
            x: { type: "inertia", stiffness: 100 },
            default: { duration: 2 }
          }}
        >
          {this.props.time}
        </motion.div>
      </ChipStyle>
    );
  }
}
