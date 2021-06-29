function happyNumber(n) {
  let set = new Set();

  while (!set.has(n)) {
    let sum = 0;
    set.add(n);
    while (n > 0) {
      sum += Math.pow((n % 10), 2);
      n = Math.floor(n / 10);
    }
    if (sum === 1) {
      return true
    }

    n = sum;
  }
  return false;
}

module.exports = happyNumber;