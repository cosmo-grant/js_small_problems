function isDoubleNumber(num) {
  numAsString = String(num);
  let length = numAsString.length
  if (length % 2 != 0) { return false; }
  for (let i = 0; i < length / 2; i++) {
    if (numAsString[i] != numAsString[i + length / 2]) { return false; }
  }
  return true;
}

function twice(num) {
  return isDoubleNumber(num) ? num : 2 * num;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676