import styled from "styled-components";

const TimeFormatStyles = styled.div`
  div {
    display: flex;
  }
  button {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    margin-top: 5px;
    padding: 3px 8px;
    background: #f2f4f5;
    border: none;
    outline: none;
  }
  #mil {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  #pm {
    border-left: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .active {
    background: #5e5e5e;
    color: white;
  }
`;

export default TimeFormatStyles;
