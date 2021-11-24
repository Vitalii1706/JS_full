obj1 = {
  name: 'ivan',
  age: 17,
  fas: 25,
};

function getKeys(obj) {
  for (let el in obj) {
    console.log(el);
  }
}

getKeys(obj1);
