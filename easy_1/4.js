let rlSync = require('readline-sync');

process.stdout.write('What is the bill? ');
let bill = parseFloat(rlSync.prompt(), 10);

process.stdout.write('What is the tip percentage? ');
let tip_percentage = parseFloat(rlSync.prompt(), 10);

console.log();

let tip = bill * tip_percentage / 100;
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${(bill + tip).toFixed(2)}`);
