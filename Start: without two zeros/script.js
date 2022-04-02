const nextRow = (arr) => {
  const newArr = [];
  for (const el of arr) {
    newArr.push(`${el}1`);
    if (el.at(-1) === '1') {
      newArr.push(`${el}0`);
    }
  }
  return newArr;
};

const withoutTwoZeros = (zeros, ones) => {
  if (zeros === 0 || ones === 0) {
    return 1;
  }
  if (zeros === 1 && ones === 1) {
    return 2;
  }
  if (zeros > ones + 1) {
    return 0;
  }
  let combinations = ['0', '1'];
  let result = 0;

  for (let i = 1; i < zeros + ones; i += 1) {
    combinations = nextRow(combinations);
  }
  for (const el of combinations) {
    if (el.split('').reduce((acc, cur) => +cur === 0 ? acc + 1 : acc, 0) === zeros) {
      result += 1;
    }
  }
  return result;
};

console.log(withoutTwoZeros(1, 1));