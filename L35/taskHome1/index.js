export const parseUser = (json) => {
  try {
    return JSON.parse(json);
  } catch (err) {
    return null;
  }
};
/*
const json1 = `{"name": "Ed", "age": 18}`;

console.log(parseUser(json1));
*/
