const maxSubArray = require('../src/maximumSubarray');
const expect = require('chai').expect;

describe('Maximum subarray', function () {
  'use strict';

  it('should work with empty arrays', function () {
    expect(maxSubArray([])).to.be.undefined;
  });

  it('should return the only element when an array with single element is passed', function () {
    expect(maxSubArray([42])).to.equal(42);
  });

  it('should return the only negative element when an array with single element is passed', function () {
    expect(maxSubArray([-42])).to.equal(-42);
  });

  it('should return the zero when an array with single element, which is zero is passed', function () {
    expect(maxSubArray([0])).to.equal(0);
  });

  it('should return the max sum of a subarray', function () {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]
)).to.equal(6);
  });

  it('should return the max negative number when array with negative numbers is provided', function () {
    expect(maxSubArray([-10, -1, -2, -3, -1])).to.equal(-1);
  });
});