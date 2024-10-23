var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);  // Sort array in ascending order
    let n = nums.length;

    // Compare the product of the last three numbers with the product of the first two and the last one
    return Math.max(nums[n - 1] * nums[n - 2] * nums[n - 3], nums[0] * nums[1] * nums[n - 1]);
};

console.log(maximumProduct([1, 2, 3]));