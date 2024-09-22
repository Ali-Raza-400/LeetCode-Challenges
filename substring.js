const str = "pwwkew";

const getSubstring = (str) => {
  const strToArray = str.split("");
  let maxLength = 0;
  let currentSubstring = [];
  
  for (let i = 0; i < strToArray.length; i++) {
    if (currentSubstring.includes(strToArray[i])) {
      // Remove elements from the start of the substring until we remove the duplicate
      console.log("strToArray[i]",strToArray[i]);
      while (currentSubstring.includes(strToArray[i])) {
        console.log("currentSubstring",currentSubstring);
        currentSubstring.shift();
      }
      console.log("currentSubstring=>",currentSubstring);
    }
    // Add the current character to the substring
    currentSubstring.push(strToArray[i]);
    // console.log("strToArray[i]",currentSubstring);
    // Update the maximum length found so far
    maxLength = Math.max(maxLength, currentSubstring.length);
    console.log("maxLength",maxLength);
  }

  return maxLength;
};

console.log(getSubstring(str)); // 3
