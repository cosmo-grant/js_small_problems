/*
input
  text: string
output
  string, like text, but with number words replaced by corresponding numerals

data structure
  object, mapping number words to numerals <--- constant

algorithm
  initialize numbersToNumerals object
  set words array: split text on sequence of non-alphabetic chars, keeping splitters
  e.g. 'Call me at four five.' -> ['Call', ' ', 'me', ' ', 'at', ' ', 'four', 'five', '.']
  map words array: leave non-number words as is, map number words to numerals
  return joined words array (join on '', because retained splitters)


notes
  number words are 'zero', 'one', ..., 'nine'
  don't need to worry about 'ten', 'eleven', ...
  does case matter? assume only replace lower case
  how to treat hyphenated words e.g. 'th-ree' assume leave as is

*/

const numberWordsToNumerals = {
  'zero': '0',
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}

function wordToDigit(text) {
  let words = text.split(/([^a-zA-Z]+)/);
  return words
    .map(word => numberWordsToNumerals[word] || word)
    .join('');
}

// repeated number words, with other words and punctuation
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// empty string
console.log(wordToDigit('') === '');

// no number words
console.log(wordToDigit('foo bar baz') === 'foo bar baz');

// all number words
console.log(wordToDigit('zero one two three four five six seven eight nine') === '0 1 2 3 4 5 6 7 8 9');

// capitalized words
console.log(wordToDigit('Do not capitalize Nine or zeRo or FOUR') === 'Do not capitalize Nine or zeRo or FOUR');
