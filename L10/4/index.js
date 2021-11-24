'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return null;
  }
  const absoluteValues = arr.map((num) => Math.abs(num));
  const max = Math.max(...absoluteValues);
  return max;
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber(555)); // ===> 2.1
console.log(getMaxAbsoluteNumber([])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
