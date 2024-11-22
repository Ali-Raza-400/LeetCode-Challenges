/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let s1Arr=s1.split(" ")
    let s2Arr=s2.split(" ")
    let resultArr=[]
        for(let idx of s1Arr){
           if(!s2Arr.includes(idx)){
               resultArr.push(idx)
           }
        }
        for(let idx of s2Arr){
           if(!s1Arr.includes(idx)){
               resultArr.push(idx)
           }
        }
        let resultArrObj={}
        for(let char of  resultArr){
       
            resultArrObj[char]=(resultArrObj[char]||0) +1
        }
        const data=Object.keys(resultArrObj).filter(key=>{
            return resultArrObj[key]===1
            // console.log("resultArrObj:::",resultArrObj[key])
        })

        return data
};