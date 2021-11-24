const getAdults = (obj) =>
  Object.entries(obj)
    .filter((user) => user[1] > 17)
    .map((user) => user[0]);
