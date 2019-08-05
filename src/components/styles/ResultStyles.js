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
    flex-wrap: wrap;
    justify-content: center;
  }
  @media only screen and (max-width: 360px) {
    padding: 0.3rem;
  }
`;

export default ResultStyles;
