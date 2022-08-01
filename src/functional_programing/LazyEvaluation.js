/**
 *
 */
function Lazy(arr) {
  this.arr = arr;
  this.iterator = null;
  return this;
}

/**
 * take方法，连续的取出数组中的n个值
 * @param {*} n
 */
Lazy.prototype.take = function (n) {
  const gen = function* () {
    if (n < 1) {
      return;
    }
    let i = 0;
    for (let item of that.arr) {
      yield item;
      i++;
      if (i > n) {
        return;
      }
    }
  };
  this.iterator = gen();
  return this;
};

/**
 * 对每个元素，执行func方法
 * @param {*} func
 */
Lazy.prototype.each = function (func) {
  let index = 0;

  while (this.iterator) {
    console.log("ccccc", func, this.iterator.next());
    // func(this.iterator.next(), index);
    index++;
  }
};

new Lazy([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  .take(10)
  .each((value, index) => {
    // console.log(`Index ${index}: ${value};`);
    console.log(value);
  });
