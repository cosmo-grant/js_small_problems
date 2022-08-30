function findFibonacciIndexByLength(length) {
  let index = 1;
  let [first, second] = [1n, 1n];
  while (lengthOfNumber(first) < length) {
    [first, second] = [second, first + second];
    index += 1;
  }
  return BigInt(index);
}

function lengthOfNumber(num) {
  return String(num).length;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);