/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let newArray = [];
  let currentVal;
  for (let i = 0; i < arr.length; i++) {
    currentVal = fn(arr[i], i);
    if (currentVal) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
