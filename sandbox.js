function checkForC(arr) {
  arr.forEach(letter => {
    if (letter === 'c') {
      return true;
    }
  })
  return false;
}

let arr = ['a', 'b', 'c', 'd'];
console.log(checkForC(arr));