let rotateArray = function(a, k) {
  k = k%a.length;
  reverse(a, 0, a.length-1);
  reverse(a, 0, k-1);
  reverse(a, k, a.length-1);

  function reverse(a, start, end) {
    while(start < end) {
      let temp = a[start];
      a[start] = a[end];
      a[end] = temp;
      start++;
      end--;
    };
  };
};


module.exports = {
  rotateArray
}
