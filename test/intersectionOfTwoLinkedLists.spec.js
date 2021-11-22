let getIntersectionNode = require('../src/intersectionOfTwoLinkedLists.js');
let { expect } = require('chai');
let { arrayToLinkedList, linkedListToArray } = require('./utils');

describe('#getIntersectionNode', function() {
  it('is a function', function() {
    expect(getIntersectionNode).to.be.a('Function');
  });
  it('when no intersection, returns null', function() {
    const list1 = null;
    const list2 = { val: 1, next: null };
    expect(getIntersectionNode(list1, list2)).to.equal(null);
  });
  it('when [1, 3*, 6] and [2, 4, 3*] returns [3]', function() {
    const list1 = { val: 1, next: { val: 3, next: { val: 6, next: null } } };  
    const list2 = { val: 2, next: { val: 4, next: list1.next } }; 
    expect(getIntersectionNode(list1, list2)).to.equal(list1.next);
  });
  it('when values coincide but nodes do not intersect, returns null', function() {
    const list3 = { val: 1, next: { val: 3, next: { val: 6, next: null } } }; 
    const list4 = { val: 2, next: { val: 4, next: null } }; 
    expect(getIntersectionNode(list3, list4)).to.equal(null);
  });
});
