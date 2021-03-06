import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
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
  a {
    margin-top: 0.5rem;
    color: black;
    text-decoration-line: none;
  }
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
        <motion.a
          href="https://github.com/drewngyen/wakeful"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          github.com/drewngyen/wakeful
        </motion.a>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
