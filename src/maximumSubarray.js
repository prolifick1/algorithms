let maxSubarray = function (a) {
  if (!a.length) {
    return undefined;
  }
  if (a.length === 1) {
    return a[0];
  }
  let runningCount = [];
  for (var i = 1; i < a.length; i++) {
    runningCount.push(a[0]);
    if (a[i] + a[i - 1] > a[i - 1]) {
      runningCount.push(a[i] + a[i - 1]);
    } else {
      runningCount.push(a[i])
    }
    console.log(runningCount);
  }
  return Math.max(...runningCount);
}

module.exports = maxSubarray;