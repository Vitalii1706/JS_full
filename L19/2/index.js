function getOwnProps(obj) {
  return Object.entries(obj)
    .filter((entrie) => typeof entrie[1] !== 'function')
    .map((entrie) => entrie[0]);
}

console.log(getOwnProps(ship));
