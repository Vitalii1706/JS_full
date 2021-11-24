const getTotalPrice = (arr) => {
  let totalPrice = arr.reduce((el, sum) => (sum += el));
  let res = Math.floor(totalPrice * 100) / 100;
  return '$' + res;
};

console.log(getTotalPrice([5, 12.789, 147.29888, 12.189]));
