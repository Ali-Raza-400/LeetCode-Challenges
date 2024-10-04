function largestNumber(arr){
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(largestNumber([10,5,20,30,10,3]))