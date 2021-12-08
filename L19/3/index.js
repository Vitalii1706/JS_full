export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }

  return (this.age = age);
};
const user1 = new User('Ed', 55);
console.log(user1);

user1.setAge(user1);
