// //desc
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    return `${(BigInt(num1) * BigInt(num2))}`
};