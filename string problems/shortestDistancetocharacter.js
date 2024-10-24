var shortestToChar = function(s, c) {
    let ind=[]
    let res=[]
    for(let i=0;i<s.length;i++){
        if(s[i]==c) ind.push(i)
    }
    for(let i=0;i<s.length;i++){
        let t=s.length
        for(let x of ind) t=Math.min(Math.abs(i-x),t);
        res.push(t)
    }
    return res
};


//sol 2
var shortestToChar = function(s, c) {
    let testArr=[]
    let resultArr=[]
    for(let i=0;i<s.length;i++){
        if(s[i]===c){
            testArr.push(i)
        }
    }
    for(let j=0;j<s.length;j++){
        console.log(testArr[0],s[j])
        let res=j-testArr[0]
      resultArr.push(Math.abs(res))
    }
    console.log(resultArr)
};
console.log("Try programiz.pro",shortestToChar("aaab","b"));