import React, { Component } from "react";
import TimePickerStyles from "./styles/TimePickerStyles";
import { motion } from "framer-motion";
import Submit from "./Submit";

export default class TimePicker extends Component {
  constructor(props) {
    super(props);
    let date = new Date();
    let min = date.getMinutes();
    let hours = date.getHours();
    this.state = {
      hours,
      min,
      inHours: null,
      inMins: null,
      isSubmitted: false
    };
    this.handleChangeHrs = this.handleChangeHrs.bind(this);
    this.handleChangeMin = this.handleChangeMin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeHrs(event) {
    this.setState({ inHours: event.target.value });
  }
  handleChangeMin(event) {
    this.setState({ inMins: event.target.value });
  }
  handleSubmit() {
    console.log(
      `time submitted: ${this.state.inHours} : ${this.state.inMins}`,
      this
    );
    this.setState({ isSubmitted: true });
  }
  render() {
    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
    return (
      <TimePickerStyles>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <p>Enter your bedtime</p>
        </motion.div>
        <div class="time">
          {/* <input
            type="time"
            id="appt"
            name="appt"
            min="00:00"
            max="24:00"
            required
          /> */}
          <motion.input
            onChange={this.handleChangeHrs}
            type="text"
            pattern="[0-9]*"
            placeholder={this.state.hours}
            min="0"
            max="24"
            maxlength="2"
            aria-label="hour"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          :
          <motion.input
            onChange={this.handleChangeMin}
            type="text"
            pattern="[0-9]*"
            placeholder={this.state.min}
            min="00"
            max="60"
            maxlength="2"
            aria-label="minutes"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div style={{ display: "flex", "flex-direction": "column" }}>
            {/* <input value="am" type="submit" />
            <input value="pm" type="submit" /> */}
          </div>
        </div>
        <motion.input
          class="calculate"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="calculate time"
          type="submit"
          value="Calculate"
          onClick={() =>
            this.props.submit(`${this.state.inHours}:${this.state.inMins}`)
          }
        />
        {this.state.isSubmitted && (
          <Submit hour={this.state.inHours} min={this.state.inMins} />
        )}
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <p className="secondary">
            Feel well-rested when you wake up at these times
          </p>
        </motion.div>
      </TimePickerStyles>
    );
  }
}
