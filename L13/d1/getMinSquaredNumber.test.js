// eslint-disable-next-line import/no-unresolved
import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should get min squared number', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);

  const result2 = getMinSquaredNumber('55');
  expect(result2).toEqual(null);

  const result3 = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result3).toEqual(4);
});
