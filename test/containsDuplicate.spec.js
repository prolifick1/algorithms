let containsDuplicate = require('../src/containsDuplicate.js');
let { expect } = require('chai');

describe('#containsDuplicate', function() {
  it('given [3] outputs false', function() {
    expect(containsDuplicate([3])).to.equal(false);
  })
  it('given [] outputs false', function() {
    expect(containsDuplicate([])).to.equal(false);
  });
  it('given [,] outputs false', function() {
    expect(containsDuplicate([,])).to.equal(false);
  });
  it('given [1,1] to output true', function() {
    expect(containsDuplicate([1,1])).to.equal(true);
  });
  it('given [1,2] outputs false', function() {
    expect(containsDuplicate([1,2])).to.equal(false);
  });
  it('given [1, 2, 3, 1] outputs true', function() {
    expect(containsDuplicate([1, 2, 3, 1])).to.equal(true);
  });
  it('given [1, 2, 3, 4] outputs false', function() {
    expect(containsDuplicate([1, 2, 3, 4])).to.equal(false);
  });
  it('given [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] outputs true', function() {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).to.equal(true);
  });
});
