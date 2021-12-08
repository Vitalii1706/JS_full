/*
const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const arr = fullName.split(' ');
    this.firstName = arr[0];
    this.lastName = arr[1];
  },
};
console.log(user.getFullName());
console.log(user);
*/
//in: func()(saveCalls)
//ou: func  (withMemory), (arr calls)

//algo
//1.створити
//2.
//3.

const saveCalls = (func) => {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return func.call(this, ...args);
  }
  withMemory.calls = [];
  return withMemory;
};

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
console.log(testWithMemory(4, 2));
console.log(testWithMemory(9, 1));

console.log(testWithMemory.calls);

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory.apply({ name: 'Tom' })); // 'Tom'
console.log(methodWithMemory.calls); // [[]]
