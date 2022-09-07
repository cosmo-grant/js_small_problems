/*
input: num
  positive integer

output
  number, (square of sum of first num integers) - (sum of squares of first num integers)

data structure
  array of first num integers

algorithm
  set firstNIntegers = []
  for i from 1 up to and including num
    push i
  set squareOfSum = (sum of firstNIntegers)**2
  set sumOfSquares = sum of (map of firstNIntegers to squares)
  return squareOfSum - sumOfSquares
*/

function sumSquareDifference(num) {
  let firstNIntegers = [];
  for (let i = 1; i <= num; i++) {
    firstNIntegers.push(i);
  }
  let squareOfSum = sum(firstNIntegers) ** 2;
  let sumOfSquares = sum(firstNIntegers.map(i => i ** 2));
  return squareOfSum - sumOfSquares;
}

function sum(numbers) {
  return numbers.reduce((total, current) => total + current);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150