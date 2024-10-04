function countVowel(str){
    let trimStr=str.trim()
    let count=0
    console.log(count)
   let vowel=["a","e","i","o","u"]
   for(let i=0;i<trimStr.length;i++){
       if(vowel.indexOf(trimStr[i])!==-1){
           
           count++
       }
   }
   return count
//   for(l)
}

console.log(countVowel("hello world"))

//solution 2
function countVowel(str) {
    const vowels = "aeiou";
    let count = 0;
    
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowel("hello world"));  // Output: 3
