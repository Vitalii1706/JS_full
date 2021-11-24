function getKeys(obj) {
  let res = Object.keys(obj);
  for (let el of res) console.log(el);
}

const obj1 = {
  name: 'Tom',
  age: 17,
};

console.log(getKeys(obj1));
