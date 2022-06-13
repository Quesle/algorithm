import generate from "../utils/ArrayGenerate";
import check from "../utils/Check";
import swap from "../utils/swap";

/**
 * 快速排序
 *
 * 参考：https://juejin.cn/post/7098138880695599141
 * @param {*} arr
 */
const help = (arr, left, right) => {
  var i = left;
  var j = right;
  while (i < j) {
    while (i < j && arr[j] >= arr[left]) {
      j--;
    }
    while (i < j && arr[i] <= arr[left]) {
      i++;
    }
    swap(arr, i, j);
  }
  if (arr[left] > arr[i]) {
    swap(arr, i, left);
  } else {
    if (i - 1 > left) {
      swap(arr, i - 1, left);
    }
  }
  return i;
};

const sort = (arr, left, right) => {
  if (left >= right) return;
  var index = help(arr, left, right);
  console.log(index, arr);
  sort(arr, left, index - 1);
  sort(arr, index + 1, right);
};

export const quickSort = (arr) => {
  sort(arr, 0, arr.length - 1);
  return arr;
};

const faker = generate(10);
console.log(faker);
const res = quickSort(faker);
console.log(res);
check(res);
