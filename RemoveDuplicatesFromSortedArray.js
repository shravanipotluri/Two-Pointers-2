// Time Complexity : O(n)
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : Yes
// We are taking Two pointers slow and fast. We are taking a count variable to keep track of the number of times the element is repeated. If the element is repeated more than k times, we are not incrementing the slow pointer. If the element is repeated less than k times, we are incrementing the slow pointer and putting the element at the slow pointer. We are doing this until we reach the end of the array. We are returning the slow pointer.
var removeDuplicates = function (nums) {
  let n = nums.length;
  let fast = 0;
  let slow = 0;
  let count = 0;
  let k = 2;

  while (fast < n) {
    if (fast > 0 && nums[fast] == nums[fast - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count <= k) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
var nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
