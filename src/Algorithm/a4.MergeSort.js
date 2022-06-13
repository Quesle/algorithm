import generate from "../utils/ArrayGenerate";
import check from "../utils/Check";
import { insertionSort } from "./a3.InsertionSort";

/**
 * 归并排序
 * 将两个有序数组合并成一个有序数组。
 *
 * 参考：https://juejin.cn/post/6896405654861250567
 *
 * @param {*} arr1
 * @param {*} arr2
 */
export const mergeSort = (arr1, arr2) => {
  let first = 0;
  let second = 0;
  const arr = [];
  while (first < arr1.length || second < arr2.length) {
    if (arr1[first] < arr2[second]) {
      if (first < arr1.length) {
        arr.push(arr1[first]);
      } else {
        arr.push(arr2[second]);
        second++;
      }
      first++;
    } else {
      if (second < arr2.length) {
        arr.push(arr2[second]);
      } else {
        arr.push(arr1[first]);
        first++;
      }
      second++;
    }
  }
  return arr;
};

const arrFaker1 = insertionSort(generate(100));
const arrFaker2 = insertionSort(generate(100));
const sort = mergeSort(arrFaker1, arrFaker2);
check(sort);
