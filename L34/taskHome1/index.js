const baseUrl = "https://61c732c3903185001754733f.mockapi.io/api/v1/users";

export function getUsersList() {
  return fetch(baseUrl).then((resoponse) => resoponse.json());
}

export function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then((resoponse) => resoponse.json());
}

export function createUser(userData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

export function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: "DELETE",
  });
}

export function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

// examples
/*
getUsersList().then((users) => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById("3").then((userData) => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: "ivan@email.com",
  firstName: "Ivan",
  lastName: "Murat",
  age: 40,
};

createUser(newUserData).then(() => {
  console.log("User created");
});

const updatedUserData = {
  email: "new@email.com",
  firstName: "John",
  lastName: "Doe",
  age: 17,
};

updateUser("1", updatedUserData).then(() => {
  console.log("User updated");
});

deleteUser("9").then(() => {
  console.log("User updated");
});
*/
