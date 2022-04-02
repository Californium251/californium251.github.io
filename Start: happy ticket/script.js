const isHappyTicket = (ticket) => ticket
  .split('')
  .reduce((acc, cur, index, arr) => index < arr.length / 2 ? acc + +cur : acc - cur, 0) === 0;

console.log(isHappyTicket('1120'));

