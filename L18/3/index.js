function sumOfSquares() {
  return [...arguments].reduce((acc, el) => {
    return acc + el * el;
  }, 0);
}

console.log(sumOfSqueres(1, 2, 3));
