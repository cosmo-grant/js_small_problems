/*
input
  side1, side2, side3: all numbers, may be negative, 0, positive
output
  string: 'equilateral', 'scalene', 'isosceles', 'invalid'

rules
  invalid just if (any side is <= 0, sum of two shortest <= longest)
  assuming valid:
    equilateral if all sides equal
    isosceles if exactly two equal
    scalene otherwise

algorithm: triangle(side1, side2, side3)
  if invalid
    return 'invalid'
  else if all sides equal
    return 'equilateral'
  else if two sides equal
    return 'isosceles'
  else
    return 'scalene'

algorithm: invalid(side1, side2, side3)
  set sortedSides = [side1, side2, side3] in ascending order
  if any side is <= 0 or side1 + side2 <= side3
    return true
  return false

*/

function invalid(sortedSides) {
  return (
    sortedSides[0] <= 0 || sortedSides[0] + sortedSides[1] <= sortedSides[2]
  );
}

function triangle(side1, side2, side3) {
  let sortedSides = [side1, side2, side3].sort((a, b) => a - b);
  let [shortest, middle, longest] = sortedSides;
  if (invalid(sortedSides)) {
    return 'invalid';
  } else if (shortest === longest) {
    return 'equilateral';
  } else if (shortest === middle || middle === longest) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}



console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"