const rotateLeft = (matrix) => {
  const newMatrix = [];
  for (let i = matrix[0].length - 1; i >= 0 ; i -= 1) {
    const newRow = [];
    for (const row of matrix) {
      newRow.push(row[i]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}

const rotateRight = (matrix) => {
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    const newRow = [];
    for (let j = matrix.length - 1; j >= 0 ; j -= 1) {
      newRow.push(matrix[j][i])
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}

const matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 0, 1, 2],
  [3, 4, 5, 6, 7, 8],
  [9, 0, 1, 2, 3, 4],
];

console.log(rotateLeft(matrix));
console.log(rotateRight(matrix));