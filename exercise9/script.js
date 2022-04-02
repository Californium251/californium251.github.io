const getMirrorMatrix = (matrix) => {
  const result = [];
  for (const row of matrix) {
    const rowResult = [];
    for (let i = 0; i <= row.length / 2 - 1; i += 1) {
      rowResult.push(row[i]);
    }
    for (let i = row.length / 2 - 1; i >= 0; i -= 1) {
      rowResult.push(row[i]);
    }
    result.push(rowResult);
  }
  return result;
};

const arr1 = [
  ['he', 'xl', 'et', 'io'],
  ['in', 'my', 'hea', 'rt'],
  ['fo', 're', 've', 'r'],
  ['an', 'd', 'ev', 'er'],
];

console.log(getMirrorMatrix(arr1));