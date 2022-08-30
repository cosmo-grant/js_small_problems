function sum(num) {
  let digits = String(num).split('');
  return digits.reduce(
    (total, currentVal) => total += Number(currentVal),
    0,
  );
}

console.log(sum(23));
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45