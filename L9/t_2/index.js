/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
const user = {
  name: 'Sam',
};

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  const obj = { id: userId };
  const res = Object.assign(userData, obj);
  return res;
}

function addPropertyV3(userData, userId) {
  const obj = { id: userId };
  const res2 = Object.assign(obj, userData);
  return res2;
}

function addPropertyV4(userData, userId) {
  const obj = { id: userId };
  const res3 = Object.assign(obj, userData);
  const res4 = { ...res3 };
  return res4;
}

console.log(addPropertyV4(user, '123')); // ==> { name: 'Sam', id: '1234567' }
