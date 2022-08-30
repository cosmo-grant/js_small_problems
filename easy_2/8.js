const getGrade = function (score1, score2, score3) {
  avg = (score1 + score2 + score3) / 3;
  if (avg >= 90) {
    return 'A';
  } else if (avg >= 80) {
    return 'B';
  } else if (avg >= 70) {
    return 'C';
  } else if (avg >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(80, 90, 70)); // expected: B