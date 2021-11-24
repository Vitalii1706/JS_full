const reverseString = (text) => {
  if (typeof text !== 'string') {
    return null;
  }
  const res = text.split('').reverse().join('');
  return res;
};

console.log(reverseString('transform'));
