let rlSync = require('readline-sync');

process.stdout.write('Enter a positive integer: ');
let num = parseInt(rlSync.prompt(), 10);

process.stdout.write('Enter "s" to compute the sum and "p" to compute the product: ');
let instruction = rlSync.prompt();

if (instruction === 's') {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${total}.`);
} else if (instruction === 'p') {
  let total = 1;
  for (let i = 2; i <= num; i++) {
    total *= i;
  }
  console.log(`The product of the integers between 1 and ${num} is ${total}.`)
}