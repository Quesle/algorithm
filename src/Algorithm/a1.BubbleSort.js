import generate from "../utils/ArrayGenerate";
import check from "../utils/Check";
/**
 * 冒泡排序
 * 重复地走访所有元素，依次比较两个相邻元素，如果他们的顺序错误就把他们交换狗来。
 * 走访元素的工作就是重复地进行指导没有相邻元素需要交换，也就是改元素完成遍历。
 *
 * 时间复杂度
 * O(n)
 *
 * Reference: https://juejin.cn/post/6844903982326890504
 * @param {Array} arr
 */
const bubbleSort = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[j] ^ arr[i];
        arr[i] = arr[i] ^ arr[j];
      }
    }
  }
  return arr;
};

const arra = generate(100);
const sort = bubbleSort(arra);
console.log(sort);
check(sort);
