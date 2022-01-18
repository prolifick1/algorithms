//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You can return the answer in any order.

//Constraints:
//
//    2 <= nums.length <= 104
//    -109 <= nums[i] <= 109
//    -109 <= target <= 109
//    sometimes a valid answer exists, otherwise return []

function twoSum(nums, target) {
  let seen = new Map();
  for(let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];
    if(seen.has(needed)) {
      return [seen.get(needed), i];
    } else {
      seen.set(nums[i], i);
    }
  }
  return [];
}
module.exports = twoSum;
