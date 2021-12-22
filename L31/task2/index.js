const asyncCalculator = (nmbr) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Intial value: ${nmbr}`);
      resolve(nmbr);
    }, 500);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const res = value * value;
            console.log(`Squared value: ${res}`);
            resolve(res);
          }, 500);
        })
    )
    .then((value) => {
      const res = value * 2;
      console.log(`Doubled value: ${res}`);
      return res;
    });

asyncCalculator(5).then((value) => console.log(value));
