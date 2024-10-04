function anagramOrNot(str1,str2){
    let test=str1.split(' ')
 
    let sortArray1=str1.split('').sort().join('');
    let sortArray2=str2.split('').sort().join('');
  return sortArray1===sortArray2
}
console.log(anagramOrNot("listen","silent"))