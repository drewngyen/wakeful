/**
 * alogorithm stuff for sleep cycle app
 *
 * rem cycle: 4 stages rotating (1,2,3) || rem
 * each stage is 5 - 15 minutes
 * 1 cycle = 90 - 110 minutes
 * 5.3 cycles to 4.4 cycles per night
 * awake: 16 - 18 hours
 * asleep: 6 - 8 hours
 * 7 options
 */
// console.log((8 * 60) / 110); //4.3636
/**
 * TODO: Calculate times needed per stage
 */
function round5(x) {
  return Math.ceil(x / 5) * 5;
}
const timeString = (hour, min) => {
  return `${hour}:${min}`;
};
const time = "11:00";
const pm = false;
var date = new Date();
var min = date.getMinutes();
var hour = date.getHours();
var curTime = timeString(hour, min);
console.log(curTime);
// calculates minutes from string time
const minutes = (input, pm) => {
  let minHour = parseInt(input.substring(0, 2));
  if (pm) minHour += 12;
  let time = [minHour * 60, parseInt(input.substring(3, 5))];
  return time;
};

/**
 * finding 7 options, while each option is a cycle
 * finds out when user should wake up
 * in: user input time
 * out: each cycle * 5
 */
const timeResultsInMinutes = time => {
  // get time in total minutes
  let mins = time[0] + time[1];
  console.log(mins);
  // create array to hold results
  let result = [];
  // 1 cycle is 65 min
  for (let i = 1; i <= 14; i++) {
    let minCycle = i * 92 + mins;
    if (minCycle >= 1440) {
      result.push(round5(minCycle - 1440));
    } else {
      result.push(round5(minCycle));
    }
  }
  console.log(result);
  return result;
};
let resMinArr = timeResultsInMinutes(minutes(curTime, pm));
console.log(resMinArr);

/**
 * convert minutes to time
 * in: arr of times,
 *    : pm (bool to check military time)
 *    : wake (desired wake up time)
 */
const convertMinArrToUTC = (arr, pm, wake) => {
  let wakeTimeMins = minutes(wake);
  console.log(wakeTimeMins);
  wakeTimeMins = wakeTimeMins[0] + wakeTimeMins[1];
  let n = arr.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    let hour =
      Math.floor(arr[i] / 60) === 0
        ? 12
        : !pm
        ? Math.floor(arr[i] / 60)
        : Math.floor(arr[i] / 60) > 12
        ? Math.floor(arr[i] / 60) - 12
        : Math.floor(arr[i] / 60);
    let min = pm ? arr[i] % 60 : arr[i] % 60;
    console.log(arr[i]);
    if (arr[i] > wakeTimeMins) {
      continue;
    } else {
      result.push([hour, min]);
    }
    // check if hour is greater than wake hour
    console.log(hour, min);
  }
  console.log(result);
  return result;
};

console.log(convertMinArrToUTC(resMinArr, pm, time));
export default { convertMinArrToUTC, curTime };
