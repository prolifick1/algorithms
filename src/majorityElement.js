/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let countMap = new Map();
  let limit = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (!countMap.has(nums[i])) {
      countMap.set(nums[i], 1);
    } else {
      countMap.set(nums[i], countMap.get(nums[i]) + 1)
    }
    if (countMap.get(nums[i]) > limit) {
      return nums[i];
    }
  }

};
module.exports = majorityElement;
