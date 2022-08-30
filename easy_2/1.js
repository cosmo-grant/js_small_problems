let crunch = function (str) {
  let crunchedStr = '';
  let currentChar;
  for (i = 0; i < str.length; i++) {
    if (str[i] != currentChar) {
      crunchedStr += str[i];
      currentChar = str[i];
    }
  }
  return crunchedStr;
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""