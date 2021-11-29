const sockMerchant = require('../src/sockMerchant.js');
const { expect } = require('chai');

describe('#sockMerchant', function() {
  it('is a function', function() {
    expect(sockMerchant).to.be.a('Function');
  });
  xit('finds no pairs when no pairs in array', function() {
    expect(sockMerchant(1, [9])).to.eq(0);
  });
  xit('finds 3 pairs', function() {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).to.eq(3);
  });
  xit('finds 4 pairs', function() {
    expect(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).to.eq(4);
  });
});
