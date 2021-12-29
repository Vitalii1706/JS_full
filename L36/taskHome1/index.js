const getUsers = (USERID) => {
  try {
    return fetch(`https://api.github.com/users/${USERID}`).then((response) =>
      response.json()
    );
  } catch (err) {
    console.log(err);
  }
};

export const getUsersBlogs = async (users) => {
  const arrOfPromise = users.map((user) => getUsers(user));
  const resolvedPromises = await Promise.all(arrOfPromise);

  const linkList = resolvedPromises.map((el) => el.blog);
  return linkList;
};

getUsersBlogs([`facebook`, `google`, `Microsoft`]).then((linkList) =>
  console.log(linkList)
);
