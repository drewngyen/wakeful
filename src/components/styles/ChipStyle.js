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
    /* background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%); */
    /* background: linear-gradient(90deg, #d53369 0%, #daae51 100%); */
    background: linear-gradient(180deg, #4b6cb7 0%, #182848 100%);
    color: white;
    font-weight: 600;
    display: inline-block;
    padding: 0.5em 0.8em;
    /* width: 100%; */
    /* margin: 0 auto; */
    border-radius: 20px;
  }
  .date {
    font-size: 1.4em;
  }
`;

export default ResultStyles;
