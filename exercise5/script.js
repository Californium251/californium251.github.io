const compareVersion = (v1, v2) => {
  const [major1, minor1] = v1.split('.');
  const [major2, minor2] = v2.split('.');
  if (+major1 > +major2) {
    return 1;
  } else if (+major1 < +major2) {
    return -1;
  } else if (minor1 > minor2) {
    return 1;
  } else if (minor1 < minor2) {
    return -1;
  }
  return 0;
};


console.log(compareVersion('0.2', '0.12')) // -1
console.log(compareVersion('3.2', '4.12')) // -1
console.log(compareVersion('3.2', '2.12')) // 1
console.log(compareVersion('10.2', '2.12')) // 1