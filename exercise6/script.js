const summaryRanges = (arr) => {
  const result = [];
  if (arr.length <= 1) {
    return result;
  }
  let start = arr[0];
  let end;
  let flag = false;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] === arr[i-1] + 1) {
      flag = true;
      end = arr[i];
    } else {
      if (flag) {
        result.push(`${start}->${end}`);
        flag = false;
      }
      start = arr[i];
    }
  }
  if (flag) {
    result.push(`${start}->${end}`);
  }

  return result;
}



console.log(summaryRanges([8, 3, 1, 12, 2, 5])) // []
console.log(summaryRanges([8, 3, 1, 2, 3])) // ['1->3']
console.log(summaryRanges([0, 1, 2, 4, 5, 7])) // ['0->2', '4->5']
console.log(summaryRanges([1, 1, 3, 4, 5, -6, 8, 9, 10, 12, 14, 14])) // ['3->5', '8->10']
console.log(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5])) // ['110->112', '-5->-4']