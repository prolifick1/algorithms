let spyWrapper = {
  printString: function (myString) {
    console.log(myString[0]);

    if(myString.length === 1) {
      return;
    };
    let mySubString = myString.substring(1, myString.length);
    spyWrapper.printString(mySubString);
  }
};

module.exports = spyWrapper;
