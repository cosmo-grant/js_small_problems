/*
input
  plaintext (string), key (non-negative whole number)
output
  ciphertext (string), each alphabetic char in plaintext shifted by key letters

data structure
  alphabet, array of chars, ['a', 'b', ...]

algorithm
  split plaintext into array of chars
  map each char to ciphertext
  return joined array

sub-algorithm: map each char to ciphertext
  if char is not alphabetic return as-is // regex, guard clause
  get index of char in alphabet
  add key to index
  get remainder on division by 26 <- MAGIC CONSTANT
  get char at that index of alphabet
  uppercase char if given char was uppercase
*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ALPHABET_LENGTH = 26;

function caesarEncrypt(plaintext, key) {
  return plaintext
    .split('')
    .map(char => caesarEncryptChar(char, key))
    .join('');
}

function caesarEncryptChar(char, key) {
  if (!/[a-z]/i.test(char)) { return char; }

  let encryptedChar = ALPHABET[(ALPHABET.indexOf(char.toLowerCase()) + key) % ALPHABET_LENGTH];

  if (/[A-Z]/.test(char)) {
    return encryptedChar.toUpperCase();
  } else {
    return encryptedChar;
  }
}

// simple shift
console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");

// wrap around
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"