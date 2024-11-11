// Time Complexity : O(m+n)
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : Yes
// We are taking two pointers and one index pointer.We are comparing the elements of two arrays and putting the greater element at the end of the array. We are decrementing the index pointer and the pointer of the array which has the greater element. We are doing this until we reach the end of the array. If there are any elements left in the second array, we are putting them in the first array.
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let idx = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[idx] = nums1[p1];
      p1--;
    } else {
      nums1[idx] = nums2[p2];
      p2--;
    }
    idx--;
  }
  while (p2 >= 0) {
    nums1[idx] = nums2[p2];
    p2--;
    idx--;
  }
};
var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];
var m = 3;
var n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
