const getTotalRevenue = (transactions) => {
  let sum = 0;
  for (let obj in transactions) {
    sum += transactions[obj].amount;
  }
  console.log(sum);
  return sum;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);
