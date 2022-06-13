export const generate = (n) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = (Math.random() * n) | 0;
  }
  return arr;
};

export default generate;
