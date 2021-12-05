const productExceptSelf = require('../src/productExceptSelf.js');
const { expect }  = require('chai');

describe('#productExceptSelf', function() {
  it('standard case [1, 2, 3, 4] returns [24, 12, 8, 6]', function() {
    expect(productExceptSelf([1, 2, 3, 4])).to.eql([24, 12, 8, 6]);
  });
  it('standard case [4, 3, 2, 1, 2] returns [12, 16, 24, 48, 24]', function() {
    expect(productExceptSelf([4, 3, 2, 1, 2])).to.eql([12, 16, 24, 48, 24]);
  });
  it('case with only 2 values [1, 2] returns [2, 1]', function() {
    expect(productExceptSelf([1, 2])).to.eql([2, 1]);
  });
  it('edge case with values [-1, 1, 0, -3, 3] returns [0, 0, 9, 0, 0] (no divide by zero allowed)', function() {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).to.eql([0, 0, 9, 0, 0]);
  });
  it('edge case with single value [6] returns [1]', function() {
    expect(productExceptSelf([6])).to.eql([1]);
  });

});
