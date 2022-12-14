function fibonacci(n) {
  let first = 1;
  let second = 1;
  for (let i = 3; i <= n; i++) {
    [first, second] = [second, first + second];
  }
  return second;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765