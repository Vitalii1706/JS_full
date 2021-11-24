const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);
const arr = [1, 2, 3, 4, 5, 6, 7, 9, 12, 15, 18, 19];
console.log(getSpecialNumbers(arr)); // ==> [4, 1, 11]
