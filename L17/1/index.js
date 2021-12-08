export const user = {
  firstName: 'Ed',
  lastName: 'Po',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user.getFullName());
