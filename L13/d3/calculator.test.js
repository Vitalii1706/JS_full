import { reverseArray, withdraw, getAdults } from './calculator.js';

// reverseArray
it('Check whether the array', () => {
  const result = reverseArray(555);
  expect(result).toEqual(null);
});

it('Must make a mirror array', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([5, 4, 3, 2, 1]);
});

it('Must make a mirror array', () => {
  const result = reverseArray([-1, 4, -3, 5, -126]);

  expect(result).toEqual([-126, 5, -3, 4, -1]);
});

// withdraw
it('check if it withdraws money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('check when there is not enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it('check if it withdraws money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, 6], 'User', 6);
  expect(result).toEqual(0);
});

// getAdults;
it('make a sample of seniors 18', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('empty object', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('make a sample of seniors 18', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
