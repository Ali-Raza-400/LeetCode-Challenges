var firstUniqChar = function (s) {
    const charCount = {};
  
    // Count occurrences of each character
    for (let char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first unique character by index
    for (let i = 0; i < s.length; i++) {
      if (charCount[s[i]] === 1) {
        return i;
      }
    }
  
    return -1; // No unique character found
  };