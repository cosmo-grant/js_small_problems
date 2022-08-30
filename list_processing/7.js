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

function palindromes(string) {
  return substrings(string)
    .filter(substring => substring.length > 1)
    .filter(substring => substring === substring.split('').reverse().join(''));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
["ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo"]

console.log(palindromes('knitting cassettes'));
// returns
["nittin", "itti", "tt", "ss", "settes", "ette", "tt"]