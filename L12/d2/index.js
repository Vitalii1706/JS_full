const cleanTransactionsList = (arr) => {
  let newArr = arr.slice();
  let res = newArr.map((el) => +String(el).trim());
  let res2 = res.filter((el) => !Number.isNaN(el));
  let res3 = res2.map((el) => `$${el.toFixed(2)}`);
  return res3;
};

console.log(
  cleanTransactionsList([
    '   1.9',
    '16.4  ',
    '17',
    ' 1.01 dollar',
    'hhh55',
    ' .   /   ',
    '   55//  .',
  ])
);
