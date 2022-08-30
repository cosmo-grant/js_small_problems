function leadingSubstrings(string) {
  let prefixes = [];
  currentPrefix = '';
  Array.from(string).forEach(char => {
    currentPrefix += char;
    prefixes.push(currentPrefix);
  })
  return prefixes;
}

function substrings(string) {
  let allSubstrings = [];
  for (let i = 0; i < string.length; i++) {
    allSubstrings = allSubstrings.concat(leadingSubstrings(string.substring(i)))
  }
  return allSubstrings;
}

console.log(substrings('abcde'));

// returns
// ["a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e"]