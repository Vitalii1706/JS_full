/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((el) => el.name);
  }

  getUserIds() {
    return this._users.map((el) => el.id);
  }

  getUserNameById(id) {
    this._users.find((user) => {
      if (user.id === id) return user.name;
    });
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
const user1 = new User('2', 'Edvard', 'session-id1');
const user2 = new User('3', 'Ed', 'session-id2');
const user3 = new User('4', 'Felix', 'session-id3');
// получить свойства можем
console.log(user); // ===> '1'
console.log(user._name); // ===> 'Tom'
console.log(user._sessionId); // ===> 'session-id'

console.log(user2); // ===> '1'
console.log(user2._name); // ===> 'Tom'
console.log(user2._sessionId);
const userRepository = new UserRepository([user, user1, user2, user3]);
console.log(userRepository.getUserNames());
console.log(userRepository.getUserIds());
console.log(userRepository.getUserNameById(2));

//console.log(UserRepository());

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
