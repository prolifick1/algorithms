function twoSum(nums, target) {
  let seen = new Map();
  for(let i = 0; i < nums.length; i++) {
   let needed = target - nums[i];
    if(seen.has(needed)) {
      return [seen.get(needed), i];
    } else {
      seen.set(nums[i], i);
    };
  }
  return [];
	
}
module.exports = twoSum;
