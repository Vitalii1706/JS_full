const splitString = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }
  const strArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    if (chunk.length < len) {
      chunk += '.'.repeat(len - chunk.length);
    }
    strArr.push(chunk);
    startPosition += len;
  }
  return strArr;
};

console.log(splitString('jhsvsjkbvsbvіпі', 6));
