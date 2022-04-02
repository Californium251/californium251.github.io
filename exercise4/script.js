const generate = (num) => {
  let arr = [1];
  if (num === 0) {
    return arr;
  } else {
    for (let i = num; i > 0; i -= 1) {
      arr = pascaLArr(arr);
    }
  }
  return arr;
}

const pascaLArr = (arr) => {
  const newArr = [1];
  for (let i = 1; i < arr.length; i += 1) {
    newArr[i] = arr[i] + arr[i-1];
  }
  newArr.push(1);
  return newArr;
}

console.log(generate(1));