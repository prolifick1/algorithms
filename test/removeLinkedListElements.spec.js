const removeElements = require('../src/removeLinkedListElements.js');
const { expect }  = require('chai');
const { linkedListToArray, arrayToLinkedList } = require('./utils.js');

describe('removeElements', function() {
  it('exists', function() {
    expect(removeElements).to.exist;
  });
  it('accepts exactly 2 arguments', function() {
    expect(removeElements.length).to.eq(2);
  });
  it('returns a head of type Object', function() {
    let llist = arrayToLinkedList([1, 2, 3, 4, 5]);
    expect(removeElements(llist, 5)).to.be.a('Object');
  });
  it('handles a standard case 1>2>5>2>3>5>7>5 o be 1>2>2>3>7', function() {
    let llist = arrayToLinkedList([1, 2, 5, 5, 2, 3, 5, 7]);
    expect(linkedListToArray(removeElements(llist, 5))).to.deep.equal([1, 2, 2, 3, 7]);
  });
  it('handles empty list', function() {
    let llist = arrayToLinkedList([]);
    expect(linkedListToArray(removeElements(llist, 4))).to.deep.equal([]);
  });
  it('handles a list where all the elements are the same but target doesnt match', function() {
    let llist = arrayToLinkedList([3, 3, 3, 3, 3]);
    expect(linkedListToArray(removeElements(llist, 4))).to.deep.equal([3, 3, 3, 3, 3]);
  });
  it('handles a list where all the elements are the same and the target matches', function() {
    let llist = arrayToLinkedList([3, 3, 3, 3, 3]);
    expect(linkedListToArray(removeElements(llist, 3))).to.deep.equal([]);
  });
});
