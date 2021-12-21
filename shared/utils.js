export function dynamicCompare(key) {
  return function (a, b) {
    return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
  };
}
