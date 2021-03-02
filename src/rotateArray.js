let rotateArray = function(a, k) {
  k = k % a.length;

  rotate(a, 0, a.length - 1);
  rotate(a, 0, k - 1);
  rotate(a, k, a.length - 1);

  function rotate(a, start, end) {
    while(start < end) {
      let temp = a[start];
      a[start] = a[end];
      a[end] = temp;
      start++;
      end--;
    }
  }
}

module.exports = {
  rotateArray
}