const sequenceOfNonLetters = /[^a-zA-Z]+/g;

function cleanUp(str) {
  return str.replaceAll(sequenceOfNonLetters, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "