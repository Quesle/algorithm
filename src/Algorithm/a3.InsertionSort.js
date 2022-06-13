import generate from "../utils/ArrayGenerate";
import check from "../utils/Check";

const swap = (arr, i, j) => {
  if (i !== j) {
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
  }
};
/**
 * 插入排序
 * 在执行过程中将序列分为已经排好部分和未排序不分，头部是已经排好序的，尾部是待排序的。
 * 从头开始扫描每个元素，将它插入到合适的位置，使头部依然保持有序状态。
 *
 * Reference: https://juejin.cn/post/7082041274642989069
 * @param {*} arr
 */
export const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
};

const arra = generate(100);
const sort = insertionSort(arra);
console.log(sort);
check(sort);
