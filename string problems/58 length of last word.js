//description
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (str) {
    str = str.trim()
    let test = str.split(" ")
    console.log("test", test)
    let result = []
    for (let i = test.length - 1; i >= 0; i--) {
        result.push(test[i])
    }
    return result[0].length
};