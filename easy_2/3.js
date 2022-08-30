let stringy = num => {
  let str = '';
  let oneOrZero = '1';
  for (let i = 0; i < num; i++) {
    str += oneOrZero;
    oneOrZero = +!oneOrZero;
  }
  return str;
};

console.log(stringy(5));
console.log(stringy(1));