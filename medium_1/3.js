/*
input
  num: number to rotate

output
  num: result of rotating num

rules
  rotate whole number
  fix first digit, rotate rest
  fix first two digits, rotate rest
  ...
  fix all but last two digits, rotate last two

data structure
  convert num to string
  manipulate string
  convert back to num

algorithm
  convert num to string
  set len to be length of num
  for i from len - 1 to 2
    reassign num to rotateRightmostDigits(num, i)
  convert num back to number
  return number

notes
  if length is 5, digitToRotate should be 4, 3, 2, 1 (1 has no effect)
  repeatedly call rotateRightmostDigits, changing digitToRotate each time
*/

function maxRotation(numToRotate) {
  stringToRotate = String(numToRotate);
  let len = stringToRotate.length;
  for (let indexFromRight = len; indexFromRight >= 2; indexFromRight--) {
    stringToRotate = rotateRightmostChars(stringToRotate, indexFromRight);
  }
  return Number(stringToRotate);
}

function rotateRightmostChars(stringToRotate, indexFromRight) {
  let prefix = stringToRotate.slice(0, -indexFromRight);
  let suffix = stringToRotate.slice(-indexFromRight);
  rotatedSuffix = suffix.slice(1) + suffix[0];
  return prefix + rotatedSuffix;
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845