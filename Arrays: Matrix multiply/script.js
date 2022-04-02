const multiply = (matrix1, matrix2) => {
  const newMatrix = [];
  if (matrix1[0].length !== matrix2.length) {
    return null;
  }
  for (let i = 0; i < matrix1.length; i += 1) {
    let result = 0;
    newMatrix.push([]);
    for (let j = 0; j < matrix2[0].length; j += 1) {
      let acc = 0;
      for (let k = 0; k < matrix1[i].length; k += 1) {
        acc += matrix1[i][k] * matrix2[k][j];
      }
      newMatrix[i].push(acc);
    }
  }
  return newMatrix;
};

console.log(multiply(
  [
    [2, 5],
    [6, 7],
    [1, 8],
  ],
  [
    [1, 2, 1],
    [0, 1, 0],
  ]
));