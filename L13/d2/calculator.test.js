import { calc } from './calculator.js';

it('should get +', () => {
  const result = calc('2 + 5');
  expect(result).toEqual('2 + 5 = 7');
});

it('should get -', () => {
  const result = calc('5 - 5');
  expect(result).toEqual('5 - 5 = 0');
});

it('should get *', () => {
  const result = calc('5 * 5');
  expect(result).toEqual('5 * 5 = 25');
});

it('should get /', () => {
  const result = calc('5 / 5');
  expect(result).toEqual('5 / 5 = 1');
});

it('should get /', () => {
  const result = calc(5 + 2);
  expect(result).toEqual(null);
});
