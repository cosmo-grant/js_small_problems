/*
input
  positive odd integer (1, 3, 5, ...)
output
  logs a multiline string
  a diamond of stars

MAIN ALGORITHM
  initialize empty string
  for each i from 1 to n
    append line i
  return string

Given n, what is line i?
central line number is (n + 1) / 2
distance from central line number is: abs(i - ((n + 1) / 2))
number of stars on a line is n - 2 * distance from central line number
number of spaces on left is distance from central line number

SUBPROCEDURE: make line i
input
  line number, total number of lines
output
  string: line i in diamond
algorithm
  let dfcln = abs(i - ((n + 1) / 2))
  return dfcln-many spaces, then (n - 2 * dfcln)-many stars, then dfcln-many spaces
*/

// function diamond(n) {
//   let diamondString = '';
//   for (let i = 1; i <= n; i++) {
//     diamondString += makeLine(n, i);
//   }
//   console.log(diamondString);
// }

// function makeLine(n, i) {
//   let distanceFromCenter = Math.abs(i - (n + 1) / 2);
//   return ' '.repeat(distanceFromCenter) +
//     '*'.repeat(n - 2 * distanceFromCenter) +
//     ' '.repeat(distanceFromCenter) +
//     '\n';
// }

function diamond(n) {
  let numStars = oddsUpAndDown(n);
  lines = numStars
    .map((num => ' '.repeat((n - num) / 2) + '*'.repeat(num) + ' '.repeat((n - num) / 2)))
    .join('\n');
  console.log(lines);
}

function hollowDiamond(n) {
  let numStars = oddsUpAndDown(n);
  lines = numStars
    .map((num => ' '.repeat((n - num) / 2) + stars(num) + ' '.repeat((n - num) / 2)))
    .join('\n');
  console.log(lines);
}

function stars(num) {
  if (num === 1) { return '*'; }
  return '*' + ' '.repeat(num - 2) + '*';
}

function oddsUpAndDown(n) {
  let oddsUp = [];
  for (let i = 1; i <= n; i += 2) {
    oddsUp.push(i);
  }
  let oddsDown = oddsUp.slice(0, -1).reverse();
  return oddsUp.concat(oddsDown);
}

// console.log(oddsUpAndDown(1));
// console.log(oddsUpAndDown(3));
// console.log(oddsUpAndDown(5));

diamond(1);
diamond(3);
diamond(9);

hollowDiamond(1);
hollowDiamond(3);
hollowDiamond(9);
