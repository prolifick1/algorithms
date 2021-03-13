const {
  expect
} = require('chai');

const twoSum = require('../src/twoSum.js');

describe('twoSum()', () => {
  it('Test Case #1', () => {
    expect(twoSum([4, 6], 10)).to.eql([0, 1]);
  });

  it('Test Case #2', () => {
    expect(twoSum([4, 6, 1], 5)).to.eql([2, 0]);
  });

  it('Test Case #3', () => {
    expect(twoSum([4, 6, 1, -3], 3)).to.eql([3, 1]);
  });

  it('Test Case #4', () => {
    expect(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).to.eql([6, 4]);
  });

  it('Test Case #5', () => {
    expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)).to.eql([7, 8]);
  });

  it('Test Case #6', () => {
    expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)).to.eql([2, 9]);
  });

  it('Test Case #7', () => {
    expect(twoSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)).to.eql([1, 4]);
  });

  it('Test Case #8', () => {
    expect(twoSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)).to.eql([9, 6]);
  });

  it('Test Case #9', () => {
    expect(
        twoSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)).to.eql([]);
  });

  it('Test Case #10', () => {
    expect(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 15)).to.eql([]);
  });
});