import styled from "styled-components";

const ResultStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  .hidden {
    display: none;
  }
  div {
    background: ${props =>
      props.bgColor || "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)"};
    color: white;
    font-weight: 600;
    display: inline-block;
    padding: 0.5em 0.8em;
    border-radius: 20px;
  }
  @media only screen and (max-width: 360px) {
    div {
      font-size: 0.9rem;
    }
  }
`;

export default ResultStyles;
