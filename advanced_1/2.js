/*
input
  matrix (array of arrays)
output
  new transposed matrix (array of arrays)
notes
  entry at i,j is matrix[i][j]

algorithm
  set numRows, numCols to number of rows and columns in input matrix
  initialize output array: matrix with numColumns rows, each row being an empty array
  e.g. 3 x 4 input matrix -> [[], [], [], []]
  for each colIndex from 0 to numCols - 1
    for each rowIndex from 0 to numRows - 1
      set element to input[rowIndex][colIndex]
      push element into output[colIndex]
  return output matrix

*/

function transpose(matrix) {
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  let transposedMatrix = [];
  for (let colIndex = 0; colIndex < numCols; colIndex++) {
    transposedMatrix.push([]);
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      transposedMatrix[colIndex].push(matrix[rowIndex][colIndex]);
    }
  }
  return transposedMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));