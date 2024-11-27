/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freqMap = {};
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    const maxFreq = Math.max(...Object.values(freqMap));

    let count = 0;
    for (let num of nums) {
        if (freqMap[num] === maxFreq) {
            count++;
        }
    }

    return count;
};
