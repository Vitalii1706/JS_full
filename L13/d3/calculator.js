/* eslint-disable default-case */

export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};

export function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      if (balances[i] - amount < 0) {
        return -1;
      }
      if (balances[i] - amount >= 0) {
        balances[i] -= amount;
        console.log(balances);
        return balances[i];
      }
    }
  }
}

export const getAdults = (obj) => {
  let res = {};
  for (let el in obj) {
    if (obj[el] > 17) {
      res[el] = obj[el];
    }
  }
  return res;
};
