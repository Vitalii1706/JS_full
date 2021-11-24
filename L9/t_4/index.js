const rooms = {
  room1: [{ name: 'bob' }, { name: 'ted' }, { name: 'ed' }],
  room2: [{ name: 'Med' }, { name: 'Erl' }, { name: 'Tom' }],
  room3: [{ name: 'jon' }, { name: 'kit' }, { name: 'nik' }],
};

const getPeople = (obj) => {
  const arr = Object.values(obj);
  const newArr = arr.flat();
  const newArr2 = newArr.map((el) => Object.values(el));
  const newArr3 = newArr2.flat();
  return newArr3;
};

console.log(getPeople(rooms));
