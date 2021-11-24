'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  let prec10 = 10 ** prec;
  let res = [
    Math.floor(num * prec10) / prec10,
    Math.trunc(num * prec10) / prec10,
    Math.ceil(num * prec10) / prec10,
    Math.round(num * prec10) / prec10,
    +num.toFixed(prec),
  ];
  return res;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
