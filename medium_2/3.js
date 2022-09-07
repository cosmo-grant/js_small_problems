function triangle(angle1, angle2, angle3) {
  let sortedAngles = [angle1, angle2, angle3].sort((a, b) => a - b);
  let [smallest, middle, largest] = sortedAngles;
  if (!valid(sortedAngles)) {
    return 'invalid';
  } else if (90 < largest) {
    return 'obtuse';
  } else if (largest < 90) {
    return 'acute';
  } else {
    return 'right';
  }
}

function valid(sortedAngles) {
  let sum = sortedAngles.reduce((total, current) => total + current);
  return sortedAngles[0] > 0 && sum === 180;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"