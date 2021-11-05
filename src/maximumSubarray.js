let maxSubarray = function (nums) {
  let glob = nums[0];
  let curr = nums[0];
  for(let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    if(glob < curr) {
      glob = curr;
    }
  }
  return glob;
}

module.exports = maxSubarray;
