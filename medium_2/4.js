/*
input
  positive integer > 1752 (when modern calendar adopted)

ouput
  non-negative integer, the number of Friday 13ths in input year

notes
  Friday 13th: day 5, date 13

data structure

algorithm
  initialize counter to 0
  initialize date to 13th of Jan of input year
  for each i from 1 to 12
    change month of date in place to month i
    if day is friday
      increment counter
  return counter
*/

function fridayThe13ths(year) {
  let count = 0;
  let date = new Date(year, 0, 13);
  for (let month = 0; month <= 11; month++) {
    date.setMonth(month);
    if (date.getDay() === 5) { count++; }
  }
  return count
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2