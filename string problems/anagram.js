//Description
// Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



//solutions
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let sortS = s.split("").sort().join('')
    let sortt = t.split("").sort().join('')
    if (s.length === t.length) {

        return sortS.includes(sortt)
    }
    return false
};