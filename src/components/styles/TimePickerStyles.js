import styled from "styled-components";

const TimePickerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 1.5rem; */
  width: 100%;
  div {
    /* display: flex; */
    margin: auto 0;
    font-size: 3.5rem;
  }
  p {
    font-size: 1.7rem;
  }
  .am-pm {
    margin: 0;
    display: flex;
    position: relative;
    /* flex-direction: column; */
  }
  .secondary {
    font-size: 1rem;
  }
  #sep {
    /* height: 100%; */
  }
  .time {
    display: inline-flex;
    align-items: baseline;
    /* margin: 0 auto; */
  }
  .calculate {
    /* border: 3px solid rgba(37, 96, 159, 0.5); */
    /* border: none; */
    /* outline: 2px red; */
    margin-top: 1em;
    font-size: 1rem;
    padding: 0.4rem 0.6rem;
    border-radius: 1rem;
    border: 2px solid rgba(37, 96, 159, 1);
    /* background: rgba(37, 96, 159, 1); */
    background: white;
    outline: none;
    color: rgba(37, 96, 159, 1);
    font-weight: 600;
    transition: 200ms ease;
  }
  .calculate:hover {
    color: white;
    background: rgba(37, 96, 159, 1);
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input[type="number"] {
    margin: 0.5rem;
    display: flex;
    /* align-items: center; */
    border: none;
    outline: none;
    color: black;
    padding: 0.5em 0.4em;
    /* padding: 0px; */
    font-size: 3rem;
    font-family: helvetica;
    width: 3.5rem;
    border-radius: 15%;
    background-color: #f2f4f5;
  }
  input[type="button"],
  button,
  input[type="submit"],
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    /* margin: 0; */
  }
  input[type="time"] {
    margin-top: 1rem;
    display: flex;

    /* align-items: center; */
    border: none;
    outline: none;
    color: white;
    padding: 0px;
    font-size: 1rem;
    font-family: helvetica;
    width: 400px;
  }

  /* Wrapper around the hour, minute, second, and am/pm fields as well as 
the up and down buttons and the 'X' button */
  input[type="text"]::-webkit-datetime-edit-fields-wrapper {
    display: flex;
    /* width: 100%; */
    /* justify-content: space-around; */
  }

  /* The space between the fields - between hour and minute, the minute and 
second, second and am/pm */
  input[type="time"]::-webkit-datetime-edit-text {
    margin: 0.5em;
    /* padding: 19px 4px; */
  }

  /* Hour */
  input[type="time"]::-webkit-datetime-edit-hour-field {
    background-color: #f2f4f5;
    color: black;
    border-radius: 15%;
    padding: 3rem 3rem;
    transition: 0.2s;
    /* margin: 1em; */
  }
  input[type="time"]::-webkit-datetime-edit-hour-field:hover {
    background-color: lightgrey;
    color: black;
    /* margin: 1em; */
  }

  /* Minute */
  input[type="time"]::-webkit-datetime-edit-minute-field {
    background-color: #f2f4f5;
    color: black;
    border-radius: 15%;
    padding: 3rem 3rem;
    transition: 0.2s;
    /* margin: 1em; */
  }
  input[type="time"]::-webkit-datetime-edit-minute-field:hover {
    background-color: lightgrey;
    color: black;
  }
  /* AM/PM */
  input[type="time"]::-webkit-datetime-edit-ampm-field {
    margin-left: 0.5rem;
    background-color: #7155d3;
    border-radius: 15%;
    color: #fff;
    padding: 3rem 3rem;
    transition: 0.2s;
    /* margin: 1em; */
  }
  input[type="time"]::-webkit-datetime-edit-ampm-field:hover {
    background-color: black;
  }
  /* 'X' button for resetting/clearing time */
  input[type="time"]::-webkit-clear-button {
    display: none;
  }

  /* Up/Down arrows for incrementing/decrementing the value */
  input[type="time"]::-webkit-inner-spin-button {
    display: none;
  }
`;

export default TimePickerStyles;
