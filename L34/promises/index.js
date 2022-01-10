// in: obj
// out: undef

const saveUser = (userData) => {
  console.log(JSON.stringify(userData));
  // in: str, obj
  // ou: promise

  const httpPromise = fetch(
    "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  // in: func callback
  // --in: promise result
  // --ou: RANDOM
  // ou: promise

  httpPromise
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      alert(JSON.stringify(res));
    });

  //
};

const user = {
  email: "v@ukr.net",
  userName: "user111",
  password: "54354354",
};

saveUser(user);
