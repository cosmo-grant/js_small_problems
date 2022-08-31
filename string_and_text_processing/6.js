function staggeredCase(text) {
  return text
    .split('')
    .map((char, index) => {
      if (/[a-zA-Z]/.test(char) && index % 2 === 0) {
        return char.toUpperCase();
      } else if (/[a-zA-Z]/.test(char) && index % 2 === 1) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"