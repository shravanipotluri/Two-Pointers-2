// Time Complexity : O(m+n)
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : Yes
// We are taking two pointers r and c. We are starting from the bottom left corner of the matrix. If the target is equal to the element at the r and c, we are returning true. If the target is less than the element at r and c, we are decrementing r. If the target is greater than the element at r and c, we are incrementing c. We are doing this until we reach the top right corner of the matrix. If we reach the top right corner of the matrix, we are returning false.

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let r = m - 1;
  c = 0;
  while (r >= 0 && c < n) {
    if (matrix[r][c] == target) {
      return true;
    } else if (target < matrix[r][c]) {
      r--;
    } else {
      c++;
    }
  }
  return false;
};
var matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
var target = 5;
console.log(searchMatrix(matrix, target));
var target = 20;
console.log(searchMatrix(matrix, target));
