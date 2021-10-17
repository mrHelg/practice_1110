'use strict';

// Exponentiation
const power = (num, exp = 1) => {
  if (!Number.isInteger(exp)) {
    throw new RangeError('Exp must be integer');
  }
  if (exp === 0) {
    return 1;
  }
  if (exp > 0) {
    return num * power(num, exp - 1);
  }
  return (1 / num) * power(num, exp + 1);
};
console.log(power(2, -2));

// Brackets
const printBrackets = (num) => {
  if (!Number.isInteger(num)) {
    throw new RangeError('Number must be integer');
  }
  if (num <= 1) {
    return '()';
  }
  return '(' + printBrackets(num-1) + ')';
  // optional as a pattern string: 
  // return `(${printBrackets(num-1)})`;
};
console.log(printBrackets(3));

