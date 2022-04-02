const ackermann = (m, n) => {
  if (m === 0) {
    return ++n;
  }
  if (n === 0) {
    return ackermann(--m, 1)
  }
  return ackermann(--m, ackermann(m, n - 1))
};

console.log(ackermann(1, 1))