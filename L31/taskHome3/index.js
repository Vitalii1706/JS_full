export const delay = (timeOut) => {
  const res = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeOut);
  });
  return res;
};
delay(3000).then(() => console.log(`Hello`));
