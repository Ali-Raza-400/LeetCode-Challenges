var firstMissingPositive = function(nums) {
    const numSet = new Set(nums); // Store all numbers in a set
    
    let smallestPositive = 1; // Start checking from 1
    
    // Loop until you find the first missing positive integer
    while (numSet.has(smallestPositive)) {
        smallestPositive += 1;
    }
    
    return smallestPositive;
};

console.log(firstMissingPositive([1,2,0])); // Output: 3
console.log(firstMissingPositive([3,4,-1,1])); // Output: 2
console.log(firstMissingPositive([7,8,9,11,12])); // Output: 1
console.log(firstMissingPositive([-2,-1,2])); // Output: 1
