const pickProps = (obj, props) => {
  let res = {};
  for (let i of props) {
    for (let el in obj) {
      if (i == el) {
        res[el] = obj[el];
      }
    }
  }
  return res;
};

// examples

console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
