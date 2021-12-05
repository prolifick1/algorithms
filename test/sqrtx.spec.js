const mySqrt = require('../src/sqrtx');
const { expect } = require('chai');

describe('mySqrt', () => {
  it('handles fractional square root', function() {
    expect(mySqrt(8)).to.equal(2);
  })
  it('handles easy square roots', () => {
    expect(mySqrt(4)).to.equal(2);
    expect(mySqrt(9)).to.eq(3)
  })

});
