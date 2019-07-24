import React, { Component } from "react";
import ClockStyles from "./styles/ClockStyles";
import ClockLive from "react-live-clock";

export default class Clock extends Component {
  render() {
    return (
      <ClockStyles>
        <div>
          <ClockLive format={"h:mm a"} ticking={true} class="time" />
          <ClockLive
            format={"dddd, MMMM Do"}
            ticking={true}
            timezone={"US/Pacific"}
            class="date"
          />
        </div>
      </ClockStyles>
    );
  }
}
