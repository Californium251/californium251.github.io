const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN (write your solution here)
const isBracketStructureBalanced = (str) => {
  const stack = [];
  let index = [];
  let symAdded;

  for (let sym of str) {
      for (let i = 0; i < openingSymbols.length; i += 1) {
          if (sym === openingSymbols[i]) {
              stack.push(sym);
              index.push(i);
              symAdded = true;
              break;
          }
          symAdded = false;
      }
      if (!symAdded) {
          if (sym === closingSymbols[index.pop()]) {
              if (!stack.pop()) {
                  return false;
              }
          } else {
              return false;
          }
      }
  }
  return stack.length === 0;
}
console.log(isBracketStructureBalanced('(>'));
console.log(isBracketStructureBalanced('()'));
console.log(isBracketStructureBalanced('[()]'));
console.log(isBracketStructureBalanced('{<>}}'));
console.log(isBracketStructureBalanced('([)]'));