let result = 0;

export function add(number) {
  result += number;
}

export function decrease(number) {
  result -= number;
}

export function reset() {
  result = 0;
}

export function getMemo() {
  return result;
}
