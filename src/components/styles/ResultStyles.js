import styled from "styled-components";

const ResultStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  align-items: center;
  margin: 0 auto;
  max-width: 450px;
  div {
    padding: 0.5em;
    display: flex;
    /* background: red; */
    flex-wrap: wrap;

    justify-content: center;
  }
  .date {
    font-size: 1.4em;
  }
`;

export default ResultStyles;
