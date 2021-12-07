let getNodeFromTail = require('../src/getNodeFromTail');
let { expect }  = require('chai');
let { arrayToLinkedList } = require('./utils');

describe('#getNodeFromTail', () => {
  it('can get node from list length 1', () => {
    let input = arrayToLinkedList([1]);
    
    expect(getNodeFromTail(input, 0)).to.equal(1);
  });
  it('can get tail node from linked list [3, 2, 1]', () => {
    let input = arrayToLinkedList([3, 2, 1]);

    expect(getNodeFromTail(input, 2)).to.equal(3);
  });
  it('can get middle node from linkedlist [5, 4, 3, 2, 1]', () => {
    let input = arrayToLinkedList([5, 4, 3, 2, 1]);

    expect(getNodeFromTail(input, 2)).to.equal(3);
  });
});
