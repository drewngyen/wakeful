export function timeString(hour, min) {
  return `${hour}:${min}`;
}

export function getTime() {
  var date = new Date();
  var min = date.getMinutes();
  var hour = date.getHours();
  var curTime = timeString(hour, min);
  return curTime;
}

export function round5(x) {
  return Math.ceil(x / 5) * 5;
}

export function minutes(input, pm) {
  let minHour = parseInt(input.substring(0, 2));
  if (pm) minHour += 12;
  let time = [minHour * 60, parseInt(input.substring(3, 5))];
  return time;
}

export function timeResultsInMinutes(time) {
  // get time in total minutes
  let mins = time[0] + time[1];
  // create array to hold results
  let result = [];
  // 1 cycle is 65 min
  for (let i = 1; i <= 7; i++) {
    let minCycle = i * 92 + mins;
    if (minCycle >= 1440) {
      result.push(round5(minCycle - 1440));
    } else {
      result.push(round5(minCycle));
    }
  }
  return result;
}

export function convertMinArrToUTC(arr, pm, wake) {
  let wakeTimeMins = minutes(wake);
  console.log(wakeTimeMins);
  wakeTimeMins = wakeTimeMins[0] + wakeTimeMins[1];
  let n = arr.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    console.log("from algo: ", arr[i]);
    let hour =
      Math.floor(arr[i] / 60) === 0
        ? 12
        : !pm
        ? Math.floor(arr[i] / 60)
        : Math.floor(arr[i] / 60) > 12
        ? Math.floor(arr[i] / 60) - 12
        : Math.floor(arr[i] / 60);
    let minMod = pm ? arr[i] % 60 : arr[i] % 60;
    let min = minMod.toString().length === 1 ? "0" + minMod.toString() : minMod;
    console.log(`arr[i] = ${arr[i]} wake: ` + wakeTimeMins);
    if (arr[i] > 719) {
      result.push(timeString(hour, min) + ` pm`);
      // continue;
    } else {
      result.push(timeString(hour, min) + ` am`);
    }
  }
  return result;
}
