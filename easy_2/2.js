function logInBox(str) {
  let interiorWidth = str.length + 2;
  let borderRow = '+' + '-'.repeat(interiorWidth) + '+';
  let interiorRow = '|' + ' '.repeat(interiorWidth) + '|';
  let textRow = '| ' + str + ' |';
  console.log(borderRow);
  console.log(interiorRow);
  console.log(textRow);
  console.log(interiorRow);
  console.log(borderRow);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');