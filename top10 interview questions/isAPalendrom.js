function longeststr(str){
    let reverseStr=""
    for(let i=str.length-1;i>=0;i--){
        reverseStr=reverseStr+str[i]
    }
    if(reverseStr===str){
        return "str is palendrom"
    }else{
        return "str is not a palendrom"
    }
 }
 
 console.log(longeststr("abba"))