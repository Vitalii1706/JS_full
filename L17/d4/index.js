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
