'use strict';

const event = {
  guests: [
    { name: 'Ed', age: 17, email: 'e@gmail.com' },
    { name: 'Sem', age: 18, email: 's@gmail.com' },
    { name: 'Tod', age: 19, email: 't@gmail.com' },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());
