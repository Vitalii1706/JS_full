const countOccurrences = (str = '', strSearch) => {
  if (strSearch === '') {
    return null;
  }
  return str.split(strSearch).length - 1;
};

console.log(countOccurrences('text text text', 'xt'));
