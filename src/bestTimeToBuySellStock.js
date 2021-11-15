let maxProfit = function maxProfit(arr) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;
  while(sell < arr.length) {
    if(arr[buy] < arr[sell]) {
      let profit = arr[sell] - arr[buy];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buy = sell;
    }
    sell = sell + 1;
  }
  return maxProfit;
};

module.exports = maxProfit;
