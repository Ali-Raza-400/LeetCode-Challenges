// // Question
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



// soluton

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
    let sArr = s.split('');
    let count = 0;
    let sp = 0;

    for (let i = 0; i < t.length; i++) {
        if (sArr[sp] === t[i]) {  // Match character in s with t
            count++;
            sp++; // Move the pointer in sArr when there's a match
        }
        if (sp === sArr.length) {  // All characters in s have been matched
            break;
        }
    }

    return sArr.length === count;  // Return true if all s characters were matched
};