let rotateArray = function(a, k) {
  k = k % a.length;
  reverse(a, 0, a.length - 1);
  reverse(a, 0, k - 1);
  reverse(a, k, a.length - 1);

  function reverse(arr, start, end) {
    while(start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
}


module.exports = {
  rotateArray
}