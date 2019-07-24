import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
// import logic
import * as tm from "../utils/sleep";
// import components
import Header from "./Header";
import TimePicker from "./TimePicker";
import Results from "./Results";

// logic

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};
// styled components
const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  width: 100vw;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Page = () => {
  const [key, setKey] = useState(0);
  const [curTime, setCurTime] = useState(tm.getTime());
  const updateTime = time => {
    setCurTime(time);
    setKey(key + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Header />
        <TimePicker time={curTime} submit={updateTime} />
        <Results key={key} time={curTime} />
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
/*
export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pm: false,
      curTime: tm.getTime(),
      curMins: tm.minutes(tm.getTime(), this.pm),
      curMinArr: tm.timeResultsInMinutes(tm.minutes(tm.getTime(), this.pm)),
      inTime: null
    };
    this.updateTime = this.updateTime.bind(this);
  }

  updateTime(time) {
    this.setState({
      curTime: time
    });
    console.log(
      `updateTime invoked! state: { ${this.state.inTime} time: ${time}}`
    );
  }
  render() {
    // wrapping theme provider and react context api
    return (
      <div>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Header />
            <TimePicker time={this.state.curTime} submit={this.updateTime} />
            <Results time={this.state.curTime} />
          </StyledPage>
        </ThemeProvider>
      </div>
    );
  }
}
*/
