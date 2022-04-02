const sumIntervals = (arr) => {
  const newArr = [];
  for (const el of arr) {
    for (let i = el[0]; i < el[1]; i += 1) {
      if (!newArr.includes(i)) {
        newArr.push(i);
      }
    }
  }
  return newArr.length;
};

console.log(sumIntervals([
  [1, 2],
  [11, 12],
]))