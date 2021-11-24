const squareArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((n) => n * n);
};
const arr = 0;
console.log(squareArray(arr));
