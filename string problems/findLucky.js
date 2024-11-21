var findLucky = function(arr) {
    let arrObj = {};

    for (let char of arr) {
        arrObj[char] = (arrObj[char] || 0) + 1;
    }

    const luckyNumbers = Object.keys(arrObj)
        .map(key => Number(key)) 
        .filter(key => key === arrObj[key]);

    return luckyNumbers.length > 0 ? Math.max(...luckyNumbers) : -1;
};