const getFiniteNumbers = (arr) => {
  const newArr = arr.slice();
  const res = [];
    for (const el of newArr) {
    if (Number.isFinite(el)) {
      res.push(el);
    }
  }
  return res;
};
const arr = [1, 15.582, 2, '17', 'll', 'one', 0, 'O', NaN];
const result = getFiniteNumbers(arr);
console.log(result);

const getFiniteNumbersV2 = (arr) => {
  const newArr = arr.slice();
  const res = [];
  for (const el of newArr) {
    if (isFinite(el)) {
      res.push(el);
    }
  }
  return res;
};

const result2 = getFiniteNumbersV2(arr);
console.log(result2);

const getNaN = (arr) => {
  const newArr = arr.slice();
  const res = [];
  for (const el of newArr) {
    if (Number.isNaN(el)) {
      res.push(el);
    }
  }

  return res;
};
const result3 = getNaN(arr);
console.log(result3);

const getNaNV2 = (arr) => {
  const newArr = arr.slice();
  const res = [];
  for (const el of newArr) {
    if (isNaN(el)) {
      res.push(el);
    }
  }
  return res;
};
const result4 = getNaNV2(arr);
console.log(result4);

const getIntegers = (arr) => {
  const newArr = arr.slice();
  const res = [];
  for (const el of newArr) {
    if (Number.isInteger(el)) {
      res.push(el);
    }
  }
  return res;
};
const result5 = getIntegers(arr);
console.log(result5);