function mySqrt(x) {
  let l = 1;
  let r = x;
  if(x < 2) {
    return x;
  }
  while(l < r) {
    let mid = l + Math.floor((r-l) / 2);
    if(x === Math.pow(mid, 2)) {
      return mid;
    }
    if(x < Math.pow(mid, 2)) {
      r = mid;
    }
    if(x > Math.pow(mid, 2)) {
      l = mid + 1;
    }
  }
  return l - 1;
}
module.exports = mySqrt;
