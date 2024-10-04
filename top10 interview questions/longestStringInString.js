function longestStr(str) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " || i == str.length - 1) {
      if (i == str.length - 1) {
        count++;
      }

      if (count > max) {
        max = count;
      }
      count = 0;
    } else {
      count++;
    }
  }
  return max;
}
console.log(longestStr("I love JavaScript"));



//solution 2
function longeststr(str){
    const arr=str.split(" ")
    let compareStr=""
    for(let word of arr){
        if(word.length>compareStr.length){
            compareStr=word
        }
    }
    return compareStr
}

console.log(longeststr("I am Ali"))