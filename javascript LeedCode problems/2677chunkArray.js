// //Description:
// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let resultArray=[]
    let chunkArray=[]
    let count=0;
        
    for(let i=0;i<arr.length;i++){
        chunkArray.push(arr[i])
        count=count+1
        if(count===size){
           resultArray.push(chunkArray) 
            count=0;
            chunkArray=[]
        }else if(i===arr.length-1 && chunkArray.length<size){
            resultArray.push(chunkArray) 
            count=0;
            chunkArray=[]
        }
    }
    return resultArray
    };
    