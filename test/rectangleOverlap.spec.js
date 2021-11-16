let rectangleOverlap = require('../src/rectangleOverlap.js');
let { expect }  = require('chai');

describe('rectangleOverlap', function() {
  it('returns true for partial overlap', function() {
    expect(rectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])).to.be.true;
    expect(rectangleOverlap([1, 1, 3, 3], [0, 0, 2, 2])).to.be.true;
    expect(rectangleOverlap([0, 0, 2, 2], [-1, -1, 1, 1])).to.be.true;
    expect(rectangleOverlap([7, 8, 13, 15], [10, 8, 12, 20])).to.be.true;
  });
  it('returns false for non-overlapping rectangles', function() {
    expect(rectangleOverlap([5, 15, 8, 18], [0, 3, 7, 9])).to.be.false;
    expect(rectangleOverlap([0, 0, 2, 2], [3, 3, 4, 4])).to.be.false;
    expect(rectangleOverlap([0, 0, 2, 2], [-4, -4, -3, -3])).to.be.false;
    expect(rectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1])).to.be.false;
  });
  it('returns false for edge overlapping over x-axis', function() {
    expect(rectangleOverlap([0, 0, 1, 1], [0, -1, 1, 0])).to.be.false;
  });
  it('returns false for edge overlapping over y axis', function() {
    expect(rectangleOverlap([0, 0, 1, 1], [-1, 0, 0, 1])).to.be.false;
  });
});
