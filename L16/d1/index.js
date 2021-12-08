const createArrayOfFunctions = (number) => {
  let result = [];
  if (number === undefined) {
    return result;
  }
  if (!Number.isFinite(number)) {
    return null;
  }
  for (let i = 0; i < number; i += 1) {
    result[i] = function () {
      return i;
    };
  }
  return result;
};

console.log(createArrayOfFunctions());
