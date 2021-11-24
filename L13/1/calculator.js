const calc = (expression) => {
  // eslint-disable-next-line prettier/prettier
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
