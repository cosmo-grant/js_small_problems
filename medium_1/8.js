let fib = {};

function fibonacci(n) {
  if (String(n) in fib) { return fib[String(n)]; }
  if (n === 1 || n === 2) {
    return fib[String(n)] = 1;
  } else {
    return fib[String(n)] = fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765