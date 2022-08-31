function staggeredCase(text) {
  let staggeredText = '';
  let upperFlag = true;
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    staggeredText += upperFlag ? char.toUpperCase() : char.toLowerCase();
    if (/[a-zA-Z]/.test(char)) {
      upperFlag = !upperFlag;
    }
  }
  return staggeredText;
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"