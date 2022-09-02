/*
input
  num: positive whole number
  n: positive whole number, at most the length of num

output
  number, like num but with last n digits rotated

data structures
  convert num to array of digits

algorithm
  convert num to string
  split string in two: prefix (up to rotated char) and suffix (starting with rotated char)
  split suffix into array of digits // split  
  remove first item and push onto end
  set rotatedSuffix to joined array
  concatenate prefix and rotatedSuffix
  convert to number
  return number
*/

function rotateRightmostDigits(numToRotate, digitToRotate) {
  numToRotate = String(numToRotate);
  let prefix = numToRotate.slice(0, -digitToRotate);
  let suffix = numToRotate.slice(-digitToRotate);
  rotatedSuffix = suffix.slice(1) + suffix[0];
  return Number(prefix + rotatedSuffix);
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(705291, 6));      // 052917