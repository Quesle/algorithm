import generate from "../utils/ArrayGenerate";
import check from "../utils/Check";
/**
 * 选择排序
 * 双重循环遍历数组，每一轮比较，找到最小元素的下标，将其交换至首位。
 *
 * Reference: https://juejin.cn/post/7074875098917765134
 * @param {*} arr
 */
export const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      arr[i] = arr[i] ^ arr[min];
      arr[min] = arr[min] ^ arr[i];
      arr[i] = arr[i] ^ arr[min];
    }
  }
  return arr;
};

const arra = generate(100);
console.log(arra);
const sort = selectionSort(arra);
console.log(sort);
check(sort);
