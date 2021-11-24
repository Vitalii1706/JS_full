const getAdults = (obj) => {
  let res = {};
  for (let el in obj) {
    if (obj[el] > 17) {
      res[el] = obj[el];
    }
  }
  return res;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
