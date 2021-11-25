const calc = (expression) => {
  const [a, operator, b] = expression.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = Number(a) - Number(b);
      break;
    case '*':
      result = Number(a) * Number(b);
      break;
    case '/':
      result = Number(a) / Number(b);
      break;
  }
  return `${expression} = ${result}`;
};

console.log(calc('5 * 4'));

const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return null;
  }
  let result = arr.slice().map((num) => num ** 2);
  let result2 = Math.min(...result);
  return result2;
};

console.log(getMinSquaredNumber(555));
