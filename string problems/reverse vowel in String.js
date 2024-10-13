// # 345. Reverse Vowels of a String
// # Solved
// # Easy
// # Topics
// # Companies
// # Given a string s, reverse only all the vowels in the string and return it.

// # The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// # Example 1:

// # Input: s = "IceCreAm"

// # Output: "AceCreIm"

// # Explanation:

// # The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// # Example 2:

// # Input: s = "leetcode"

// # Output: "leotcede"

 

// # Constraints:

// # 1 <= s.length <= 3 * 105
// # s consist of printable ASCII characters.



// #  soution

var reverseVowels = function(s) {
    let sArr = s.split("");  
    let vowels = ["a", "e", "i", "o", "u"];  
    let testArr = [];  

    for (let i = 0; i < sArr.length; i++) {
        if (vowels.includes(sArr[i].toLowerCase())) {
            testArr.push(sArr[i]);  
            sArr[i] = "test";  
        }
    }

    testArr.reverse();

    let reverseIndex = 0;  
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === "test") {
            sArr[i] = testArr[reverseIndex++];
        }
    }

    return sArr.join("");
};

console.log(reverseVowels("IceCreAm"));  // Output: "AceCreIm"
console.log(reverseVowels("leetcode"));  // Output: "leotcede"

