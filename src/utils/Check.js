export const check = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      throw new Error("This is wrong in index " + i + ".");
    }
  }
};

export default check;
