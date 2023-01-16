export function minBy(array, cb) {
  if(!array[0]){
    return undefined;
  }
  let minimum = array[0];
  for (let element of array) {
    if (cb(element) < cb(minimum)) {
      minimum = element;
    }
  }
  return minimum;
}

export function maxBy(array, cb) {
  if(!array[0]){
    return undefined;
  }
  let maximum = array[0];
  for (let element of array) {
    if (cb(element) > cb(maximum)) {
      maximum = element;
    }
  }
  return maximum;
}
