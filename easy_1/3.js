let rlSync = require('readline-sync');

const SQ_METRES_TO_SQ_FEET = 10.7639;

console.log("What is the length in metres?");
let length = parseInt(rlSync.prompt(), 10);
console.log("What is the width in metres?");
let width = parseInt(rlSync.prompt(), 10);

let areaInSquareMetres = length * width;
let areaInSquareFeet = areaInSquareMetres * SQ_METRES_TO_SQ_FEET;

console.log(`The area in square meters is ${areaInSquareMetres}`);
console.log(`The area in square feet is ${areaInSquareFeet}`);
