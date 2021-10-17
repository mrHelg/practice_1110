'use strict';

// Exponentiation
const power = (num, exp = 1) => {
  if (typeof num !== 'number') {
    throw new TypeError('Value must be number');
  }
  if (!Number.isInteger(exp)) {
    throw new TypeError('Exp must be integer');
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
  return '(' + printBrackets(num - 1) + ')';
  // optional as a pattern string:
  // return `(${printBrackets(num-1)})`;
};
console.log(printBrackets(3));

// Find min-max value
const arr = [1, 6, 8, 2, 4, -10, 11];
console.log('Min value = ' + Math.min(...arr));
console.log('Max value = ' + Math.max(...arr));

// Multiplication of arguments
const multiArgs = (...arr) => arr.reduce((result, n) => result * n);
console.log(multiArgs(1, 2, 3, 4, 5));
