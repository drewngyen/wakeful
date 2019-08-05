import React, { Component } from "react";
import TimePickerStyles from "./styles/TimePickerStyles";
import { motion } from "framer-motion";
import Submit from "./Submit";

export default class TimePicker extends Component {
  constructor(props) {
    super(props);
    let date = new Date();
    let min = date.getMinutes();
    let mins = min.toString().length === 1 ? `0${min}` : min;
    let hour = date.getHours();
    let hours = hour.toString().length === 1 ? `0${hour}` : hour;
    this.state = {
      hours,
      mins,
      inHours: hours,
      inMins: mins,
      isSubmitted: false
    };
    this.handleChangeHrs = this.handleChangeHrs.bind(this);
    this.handleChangeMin = this.handleChangeMin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeHrs(event) {
    if (event) {
      let hour = 24;
      if (event.target.value < 24) {
        hour = event.target.value;
      }
      this.setState({ inHours: hour });
    } else {
      this.setState({ inHours: this.state.hours });
    }
  }

  handleChangeMin(event) {
    console.log(event.target.value);
    if (event) {
      let min = 59;
      if (event.target.value < 60) min = event.target.value;
      this.setState({ inMins: min });
    } else {
      this.setState({ inMins: this.state.mins });
    }
  }

  handleSubmit() {
    console.log(
      `time submitted: ${this.state.inHours} : ${this.state.inMins}`,
      this
    );
    this.setState({ isSubmitted: true });
  }
  // changing focus
  changeFocusMax(e, nextID) {
    if (e.length === 2) {
      document.getElementById(nextID).focus();
    }
  }

  render() {
    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
    // TODO: Add type validation before submit
    // TODO: Conditionally render input when type validated
    return (
      <TimePickerStyles>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <p>Enter your bedtime</p>
        </motion.div>
        <div className="time">
          <motion.input
            onChange={e => {
              this.handleChangeHrs(e);
              this.changeFocusMax(e.target.value, "min");
            }}
            type="text"
            pattern="[0-9]*"
            placeholder={this.state.hours}
            min="0"
            max="24"
            maxLength="2"
            aria-label="hour"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          :
          <motion.input
            id="min"
            onChange={this.handleChangeMin}
            type="text"
            pattern="[0-9]*"
            placeholder={this.state.mins}
            min="00"
            max="60"
            maxLength="2"
            aria-label="minutes"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }} />
        </div>
        {/* <div class="am-pm">
          <button>AM</button>
          <button>PM</button>
        </div> */}
        <motion.input
          className="calculate"
          whileHover={{ scale: 1.04 }}
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
            Optimal times to wake and feel well-rested
          </p>
        </motion.div>
      </TimePickerStyles>
    );
  }
}
