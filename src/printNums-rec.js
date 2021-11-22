let spyWrapper = {
  printNums : function printNums(n) {
    if(n === 1) {
      console.log(n);
      return;
    }
    printNums(n-1);
    console.log(n);
  }
}

module.exports = spyWrapper;
