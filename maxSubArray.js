var arr = [-19, 232, -322, 54, 75];
// var n = arr.length;
// var max = 0;

// function findSum(stack) {
//   var m = stack.length;
//   var adding = 0;
//   for (a = 0; a < m; a++) {
//     adding += stack[a];
//   }
//   return adding;
// }

// function subArr(arr, n) {
//   for (i = 0; i < n; i++) {
//     var stack = [];
//     for (j = i; j < n; j++) {
//       stack.push(arr[j]);
//       max = Math.max(max, findSum(stack));
//     }
//   }
//   return max;
// }

const maxSubArray = (nums) => {
  // initiate two variable, maxSum for total max, sum for current max
  let maxSum = -Infinity;
  let currentSum = 0;
  // iterate through the nums, store sub-problems result
  for (let i = 0; i < nums.length; i++) {
    //cumulating answers to the top

    //compare currentSum add current number
    //with current number and store the maximum value
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    //compare maxSum with currentSum and store the greater value
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

var op = maxSubArray(arr);
console.log(op);
