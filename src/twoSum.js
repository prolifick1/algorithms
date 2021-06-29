function twoSum(nums, target) {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if(myMap.has(diff)) {
      return [myMap.get(diff), i];
    } else {
      myMap.set(nums[i], i)
      //keep track of the nums you've already seen,
      //one of them will make up the difference
    }
  }
  return [];
}
module.exports = twoSum;