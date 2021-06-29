function happyNumber(n) {
  let set = new Set();
  while (!set.has(n) && n > 0) {
    let sum = 0;
    set.add(n);
    sum += Math.pow((n % 10), 2);
    n = Math.floor(n / 10);
    if (sum === 1) {
      return true
    }
    n = sum;
  }
  return false;
}

module.exports = happyNumber;