const longestValidParentheses = s => {
  let dp = new Array(s.length).fill(0);
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        // if i >= 2, then dp[i] should add 2 to the value in the dp array two spaces ago
        // this allows you to grow consecutively valid parens
        // or determine if this is a separate valid set
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      }
      // if the preceding char is another ), then check dp arr one space ago
      // make sure that current index - prev dp value is infact an opening char
      else if (s[i - dp[i - 1] - 1] === '(') {
        // check if previous dp val
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      max = Math.max(max, dp[i]);
    }
  }
  return max;
};

module.exports = longestValidParentheses;
