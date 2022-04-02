const calcShipsCount = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let result = 0;
  for (let k = 0; k < arr.length; k += 1) {
    for (let i = 0; i < arr[k].length; i += 1) {
      if (arr[k][i] === 1 && (k === 0 || arr[k - 1][i] !== 1)) {
        result += 1;
        let j = 1;
        while (arr[k][i+j] === 1) {
          i += 1;
        }
      }
    }
  }
  return result;
};

const isValidField = (arr) => {
  if (arr.length === 0) {
    return true;
  }
  for (let i = 0; i < arr.length; i += 1) {
    const prevRow = arr[i - 1];
    const nextRow = arr[i + 1];
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] == 1) {
        if (prevRow !== undefined) {
          if (prevRow[j - 1] === 1 || prevRow[j + 1] === 1) {
            return false;
          }
        }
        if (nextRow !== undefined) {
          if (nextRow[j - 1] === 1 || nextRow[j + 1] === 1) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

console.log(isValidField([
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0]
]))
