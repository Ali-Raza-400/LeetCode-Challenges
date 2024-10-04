function removeDupicate(str){
    let uniqueArray=[]
        for(let i=0;i<str.length;i++){
          if(uniqueArray.indexOf(str[i])===-1){
              uniqueArray.push(str[i])
          }
          
        }
        return uniqueArray
    }
    console.log(removeDupicate([1,2,3,4,5,5,6]))