function triangle(sideLength) {
  for (let i = 1; i <= sideLength; i++) {
    let spaces = ' '.repeat(sideLength - i);
    let stars = '*'.repeat(i);
    console.log(spaces + stars);
  }
}

triangle(5);