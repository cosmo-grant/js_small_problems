function letterCaseCount(str) {
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/)) {
      lowercaseCount += 1;
    } else if (str[i].match(/[A-Z]/)) {
      uppercaseCount += 1;
    }
  }
  let neitherCount = str.length - (lowercaseCount + uppercaseCount);

  return {
    lowercase: lowercaseCount,
    uppercase: uppercaseCount,
    neither: neitherCount,
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }