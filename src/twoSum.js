function twoSum(nums, target) {
  let sorted = Array.from(nums).sort(function (a, b) {
    return a - b;
  })
  let start = 0
  let end = sorted.length - 1;
  while (start < end) {
    let sum = sorted[start] + sorted[end];
    if (sum === target) {
      return [nums.indexOf(sorted[start]), nums.lastIndexOf(sorted[end])];
    } else if (sum < target) {
      start++;
    } else if (sum > target) {
      end--;
    }
  }
  return [];
}

module.exports = twoSum;