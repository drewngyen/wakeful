import React, { Component } from "react";
import HeaderStyles from "./styles/HeaderStyles";
import Clock from "./Clock";

export default class Header extends Component {
  render() {
    return (
      <HeaderStyles>
        <h2>wakeful.</h2>
        <div>
          <Clock />
        </div>
      </HeaderStyles>
    );
  }
}
