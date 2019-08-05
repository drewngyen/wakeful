import styled from "styled-components";

const HeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-weight: 300;
  width: 100vw;
  height: 25vh;
  /* background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%); */
  /* color: black; */
  background: linear-gradient(
    90deg,
    rgba(63, 15, 107, 1) 0%,
    rgba(7, 25, 91, 1) 100%
  );
  color: white;
  /* background: linear-gradient(110deg, #1cb5e0 0%, #000851 100%); */
  /* background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%); */
  padding-bottom: 2rem;
`;

export default HeaderStyles;
