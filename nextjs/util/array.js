export function increment(array, index) {
  return index === array.length - 1 ? 0 : index + 1;
}

export function decrement(array, index) {
  return index === 0 ? array.length - 1 : index - 1;
}

export function slideArray(array, distance) {
  let result = [...array];

  for (let i = 0; i < distance; i++) {
    result = result.shift();
  }

  return result;
}
