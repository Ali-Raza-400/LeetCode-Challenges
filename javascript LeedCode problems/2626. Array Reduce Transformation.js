const reduce = function (nums, fn, init) {
    let sum = init; // Initialize sum with the provided initial value
  
    // Iterate through each element in the nums array
    for (let i = 0; i < nums.length; i++) {
      // Apply the reducer function to the accumulated sum and the current element
      sum = fn(sum, nums[i]);
    }
  
    return sum; // Return the final accumulated sum
  };
  
  // Example reducer function
  function sum(accum, curr) {
    return accum + curr; // Add current element to accumulated sum
  }
  
  let nums = [1, 2, 3, 4];
  let init = 100; // Initial value set to 100
  console.log("Final Result:", reduce(nums, sum, init)); // Output the result
  