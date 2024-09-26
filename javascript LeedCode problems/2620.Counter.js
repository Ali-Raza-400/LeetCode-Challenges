// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:

// Solution

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = -1;

  return function () {
    count++;
    return n + count;
  };
};

// solution 2
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

// solution 3

const createCounter = (n) => () => n++;

//Explanation

// createCounter(10) returns a function that increments count by 1 each time it is called.
// The function starts at -1, so when it is first called, it returns 10.
// When it is called again, count is incremented to 0, and it returns 11.
// This pattern continues, returning n + count each time it is called.
