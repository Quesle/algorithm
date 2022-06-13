export const swap = (arr, i, j) => {
  if (i !== j) {
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
  }
};
export default swap;
