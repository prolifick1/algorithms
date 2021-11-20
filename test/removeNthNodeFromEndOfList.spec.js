let { expect } = require('chai');
let removeNthFromEnd = require('../src/removeNthNodeFromEndOfList');
let { arrayToLinkedList, linkedListToArray } = require('./utils.js');

describe('#removeNthFromEnd', function() {
  it('should removeNthFromEnd([1, 2, 3, 4, 5], 2) returns [1, 2, 3, 5]', function() {
    expect(removeNthFromEnd(arrayToLinkedList([1, 2, 3, 4, 5]), 2) ).to.eql(arrayToLinkedList([1, 2, 3, 5]));
  });
  it('should removeNthFromEnd([1, 2, 3, 4, 5], 5) returns [2, 3, 4, 5]', function() {
    expect(removeNthFromEnd(arrayToLinkedList([1, 2, 3, 4, 5]), 5)).to.eql(arrayToLinkedList([2, 3, 4, 5]));
  });
  xit('should removeNthFromEnd([1, 2, 3, 4, 5], 1) returns [1, 2, 3, 4]', function() {
    expect(removeNthFromEnd(arrayToLinkedList([1, 2, 3, 4, 5])), 1).to.eql(arrayToLinkedList([1, 2, 3, 4]));
  });
});
