function leadingSubstrings(string) {
  let prefixes = [];
  currentPrefix = '';
  Array.from(string).forEach(char => {
    currentPrefix += char;
    prefixes.push(currentPrefix);
  })
  return prefixes;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]