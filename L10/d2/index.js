const getRandomNumbers = (length, from, to) => {
  let res = [];
  let fromUp = Math.ceil(from);
  let toDown = Math.floor(to);
  if (toDown - fromUp < 1) {
    return null;
  } else {
    for (let i = 0, t = length; i < t; i++) {
      res.push(Math.round(Math.random() * (toDown - fromUp) + fromUp));
    }
  }
  return res;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
