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


