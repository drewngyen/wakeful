import styled from "styled-components";

const ResultStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  .hidden {
    display: none;
  }
  /* align-items: center; */
  div {
    /* width: 4rem; */
    background: lightsteelblue;
    color: black;
    display: inline-block;
    padding: 0.5em 0.8em;
    /* width: 100%; */
    /* margin: 0 auto; */
    border-radius: 20px;
    transition: 0.2s;
  }
  div:hover {
    background: gray;
    color: white;
  }
  .date {
    font-size: 1.4em;
  }
`;

export default ResultStyles;
