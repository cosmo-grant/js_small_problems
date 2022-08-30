let rlSync = require('readline-sync');

process.stdout.write('Enter a noun:');
let noun = rlSync.prompt();

process.stdout.write('Enter a verb:');
let verb = rlSync.prompt();

process.stdout.write('Enter an adjective:');
let adjective = rlSync.prompt();

process.stdout.write('Enter an adverb:');
let adverb = rlSync.prompt();

console.log(`Do you ${verb} your ${noun} ${adverb}? That's ${adjective}.`);