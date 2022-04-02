const chunk = (arr, num) => {
  const result = []
  for (let i = 0; i < arr.length; i += num) {
    const el = [];
    for (let j = 0; j < num; j += 1) {
      if (arr[i+j] !== undefined) {
        el.push(arr[i+j]);
      }
    }
    result.push(el);
  }
  return result;
};


console.log(chunk(['a', 'b', 'c', 'd'], 3));