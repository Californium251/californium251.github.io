const getLongestLength = (str) => {
  let maxLength = 0;
  for (let i = 0; i < str.length; i += 1) {
    const arr = [];
    let j = 0;
    while (!arr.includes(str[i+j]) && i + j < str.length) {
      arr.push(str[i+j]);
      j += 1;
    }
    maxLength = Math.max(maxLength, arr.length);
  }
  return maxLength;
};

console.log(getLongestLength('jabjcdel')) // 7
console.log(getLongestLength('abcddef')) // 4
console.log(getLongestLength('abbccddeffg')) // 3
console.log(getLongestLength('abcd')) // 4
console.log(getLongestLength('1234561qweqwer')) // 9
console.log(getLongestLength('1234561qweqwerqer')) // 9
console.log(getLongestLength('')) // 0