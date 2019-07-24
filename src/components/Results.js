import React from "react";
import * as tm from "../utils/sleep";
import ResultStyles from "./styles/ResultStyles";
import Chip from "./Chip";

const Results = props => {
  let times = tm.convertMinArrToUTC(
    tm.timeResultsInMinutes(tm.minutes(props.time, props.pm)),
    true,
    tm.getTime()
  );
  const mapTimes = times.map((time, index) => {
    return <Chip time={time} delay={index * 0.2} />;
  });
  return (
    <ResultStyles>
      <div>{mapTimes}</div>
    </ResultStyles>
  );
};
export default Results;
// https://alligator.io/react/react-progressive-web-apps/
// https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282
// https://www.framer.com/motion/?utm_source=share&utm_medium=ios_app
