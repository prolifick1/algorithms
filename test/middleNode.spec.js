const middleNode = require('../src/middleNode');
const { expect } = require('chai');
const { arrayToLinkedList } = require('./utils');

describe('#middleNode', () => {
  it('can handle a llist of odd length', () => {
    let input = arrayToLinkedList([1, 2, 3, 4, 5]); 
    let expected = arrayToLinkedList([3, 4, 5]);
    expect(middleNode(input)).to.eql(expected);
  })
  it('it can handle a llist of even length', () => {
    let input = arrayToLinkedList([1, 2, 3, 4, 5, 6]); 
    let expected = arrayToLinkedList([4, 5, 6]);
    expect(middleNode(input)).to.eql(expected);
  })
});
