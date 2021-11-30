function binarySearch(arr, target) {
  let r = arr.length - 1;
  let l = 0;
  while(l <= r) {
    let mid = Math.floor((r + l) / 2);
    if(target === arr[mid]) {
      return mid;
    }
    if(target < arr[mid]) {
      r = mid - 1;
    }
    if(target > arr[mid]) {
      l = mid + 1;
    }
  }
  return -1;
}


module.exports = binarySearch;
