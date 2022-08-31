function wordCap(text) {
  return text
    .split(/(\s+)/)
    .map(wordOrSep => wordOrSep[0].toUpperCase() + wordOrSep.slice(1).toLowerCase())
    .join('');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'