/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const hashMap={};
    for(let char of nums){
        hashMap[char]= (hashMap[char]||0)+1
    }
    let resultArr=[]
       Object.keys(hashMap).map(function(key, index) {
     if(hashMap[key]===1){
         resultArr.push(Number(key))
     }})
     
   let sum = 0;
   resultArr.forEach( num => {
     sum += num;
   })
  return sum
   }