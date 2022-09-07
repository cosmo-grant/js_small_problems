/*
input
  positive integer

output
  positive integer, the least featured number greater than input
  or error message if no such featured number exists

notes
  a number is featured iff odd, multiple of 7, no repeated digits
  the largest feature number is 9876543210

data structure

algorithm
  for each i from (least odd multiple of 7 greater than num) up to and including 9876543210 in increments of 14
    if i is featured
      return i
  return error message

subalgorithm: noRepeatedDigits, num: number -> Boolean
  convert num to string of digits
  split into array of digits
  return whether array contaings repeated members

subalgorithm: nextOddMultipleOf7, num: number -> number
  for each i from input up to and including input + 13
    if i is odd multiple of 7
      return i

*/

function nextOddMultipleOf7(num) {
  for (let i = num + 1; i <= num + 14; i++) {
    if (i % 7 === 0 && i % 2 === 1) { return i; }
  }
}

function noRepeatedDigits(num) {
  let digits = num.toString().split('');
  return [...new Set(digits)].length === digits.length;
}

function featured(num) {
  for (let i = nextOddMultipleOf7(num); i <= 9876543210; i += 14) {
    if (noRepeatedDigits(i)) { return i; }
  }
  return "There is no possible number that fulfills those requirements."
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."