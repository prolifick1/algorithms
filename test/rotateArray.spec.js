const {
  expect
} = require('chai');

const rotateArray = require('../src/rotateArray').rotateArray;

describe('Rotate Array', function () {
  'use strict';

  describe('Reversing a single element linked list', function () {
    it('Input: nums = [0,1], k = 1, Output: [1,0]', function () {
      const nums = [0, 1];
      expect((rotateArray(nums, 1), nums)).to.eql([1, 0]);
    });
  });

    it('Input: nums = [0,1], k = 1, Output: [1,0]', () => {
      const nums = [0, 1];
      expect((rotateArray(nums, 1), nums)).to.eql([1, 0]);
    });

    it('Input: nums = [0,1,2,3], k = 2, Output: [2,3,0,1]', () => {
      const nums = [0, 1, 2, 3];
      expect((rotateArray(nums, 2), nums)).to.eql([2, 3, 0, 1]);
    });

    it('Input: nums = [1,2,3,4,5,6,7], k = 3, Output: [5,6,7,1,2,3,4]', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7];
      expect((rotateArray(nums, 3), nums)).to.eql([5, 6, 7, 1, 2, 3, 4]);
    });

    it('Input: nums = [-1,-100,3,99], k = 2, Output: [3,99,-1,-100]', () => {
      const nums = [-1, -100, 3, 99];
      expect((rotateArray(nums, 2), nums)).to.eql([3, 99, -1, -100]);
    });

    it('Input: nums = [1], k = 1, Output: [1]', () => {
      const nums = [1];
      expect((rotateArray(nums, 1), nums)).to.eql([1]);
    });
});