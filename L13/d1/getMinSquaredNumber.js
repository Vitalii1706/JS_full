// eslint-disable-next-line no-undef
export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const result = arr.slice().map((num) => num ** 2);
  const result2 = Math.min(...result);
  return result2;
};
