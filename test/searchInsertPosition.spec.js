let searchInsert = require('../src/searchInsertPosition.js');
let { expect }  = require('chai');

describe('#searchInsert', function() {
  it('should searchInsert([], 1) return 0', function() {
    expect(searchInsert([], 1)).to.equal(0);
  });
  it('should searchInsert([1], 0) return 0', function() {
    expect(searchInsert([1], 0)).to.equal(0);
  });
  it('should searchInsert([1], 1) return 0', function() {
    expect(searchInsert([1], 1)).to.equal(0);
  });
  it('should searchInsert([1, 3, 5, 6], 2) return 1', function() {
    expect(searchInsert([1, 3, 5, 6], 2)).to.equal(1);
  });
  it('should searchInsert([1, 3, 5, 6], 5) return 2', function() {
    expect(searchInsert([1, 3, 5, 6], 5)).to.equal(2);
  });
  it('should searchInsert([1, 3, 5, 6], 7) return 4', function() {
    expect(searchInsert([1, 3, 5, 6], 7)).to.equal(4);
  });
  it('should searchInsert([1, 3, 5, 6], 0) return 0', function() {
    expect(searchInsert([1, 3, 5, 6], 0)).to.equal(0);
  });
});

