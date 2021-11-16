function searchInsert(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] === num) {
      return mid;
    };
    if(num < arr[mid]) {
      right = mid - 1;
    };
    if(num > arr[mid]) {
      left = mid + 1;
    };
  };
  return left;
};

module.exports = searchInsert;
