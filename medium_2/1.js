/*
input
  non-empty string
  may contain uppercase alpha, lowercase alpha, or nonalpha chars

output
  object with three properties
  {
    lowercase: "string percentage, 2dp"
    uppercase: "string percentage, 2dp"
    neither: "string percentage, 2dp"
  }

data structure
  object (to be returned)
  keep input as string

algorithm
  initialize lowercaseCount, uppercaseCount
  set len = length of text - 1
  for i from 0 to len - 1
    if text is lowercase letter
      increment lowercaseCount
    else if text is uppercase letter
      increment uppercaseCount
  set neitherCount = len - (lowercaseCount + uppercaseCount)
  convert counts to percentages
  return object

subprocedure: countToPercentages
  input
    count, len
  output
    string, representing count / len * 100 to 2 decimal places

subprocedure: roundTo2DP
  input
    number, e.g. 15, 15.2, 15.25, 15.263453, 0
  output
    string, number rounded to 2dp, e.g. 15.00 15.20, 15.25, 15.26, 0.00
  algorithm
    multiply num by 100
    round to nearest integer
    divide by 100
    convert to string
    if doesn't include period, append '.00' and return
    if ends with period followed by 1 number, append '0' and return
    if ends with period followed by 2 numbers, return as is
  
algorithm
  initialize lowercaseCount, uppercaseCount
  set len = length of text - 1
  for i from 0 to len - 1
    if text is lowercase letter
      increment lowercaseCount
    else if text is uppercase letter
      increment uppercaseCount
  set neitherCount = len - (lowercaseCount + uppercaseCount)
  convert counts to percentages
  return object
*/

function letterPercentages(text) {
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let len = text.length;
  for (let i = 0; i < len; i++) {
    let char = text[i];
    if (/[a-z]/.test(char)) {
      lowercaseCount++;
    } else if (/[A-Z]/.test(char)) {
      uppercaseCount++;
    }
  }
  let neitherCount = len - (lowercaseCount + uppercaseCount);
  return {
    lowercase: countToPercentages(lowercaseCount, len),
    uppercase: countToPercentages(uppercaseCount, len),
    neither: countToPercentages(neitherCount, len),
  };
}

function countToPercentages(count, total) {
  return roundTo2DP(count / total * 100);
}

function roundTo2DP(num) {
  let roundedString = String(Math.round(num * 100) / 100);
  if (!roundedString.includes('.')) {
    return roundedString + '.00';
  } else if (/\.\d$/.test(roundedString)) {
    return roundedString + '0';
  } else {
    return roundedString;
  }
}

// console.log(roundTo2DP(15));
// console.log(roundTo2DP(15.5));
// console.log(roundTo2DP(15.55));
// console.log(roundTo2DP(15.551));
// console.log(roundTo2DP(15.558));
// console.log(roundTo2DP(0));

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }