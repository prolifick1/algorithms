const deleteDuplicates = require('../src/removeDuplicatesFromLinkedList.js');
const { expect } = require('chai');
const { ListNode, arrayToLinkedList, linkedListToArray } = require('./utils.js');
describe('remove duplicates from linked list', function() {
  describe('#deleteDuplicates', function() {
    it('should exist', function() {
      expect(deleteDuplicates).to.exist;
    });
    it('should be a function', function() {
      expect(deleteDuplicates).to.be.a('Function');
    });
    it('should take only 1 argument', function() {
      expect(deleteDuplicates.length).to.equal(1); 
    });
    it('should return an Object or Null', function() {
      expect(deleteDuplicates(null)).to.be.a('Null');
      let llist = arrayToLinkedList([1, 2, 3]);
      expect(deleteDuplicates(llist)).to.be.an('Object');
    });
    it('should be 1, 2, 5 while list = 1, 2, 3, 3, 4, 4, 5', function() {
      let llist = arrayToLinkedList([1, 2, 3, 3, 4, 4, 5]);
      expect(linkedListToArray(deleteDuplicates(llist))).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it('should be 1, 2, 3 while list = 1, 1, 2, 3', function() {
            let llist = arrayToLinkedList([1, 1, 2, 3]);
            expect(linkedListToArray(deleteDuplicates(llist))).to.deep.equal([1, 2, 3]);
          });
    it('should be 1 while list = 1', function() {
      let llist = arrayToLinkedList([1]);
      expect(linkedListToArray(deleteDuplicates(llist))).to.deep.equal([1]);
    });
    it('should be 1, 2 while list = 1, 1, 2, 2', function() {
      let llist = arrayToLinkedList([1, 1, 2, 2]);
      expect(linkedListToArray(deleteDuplicates(llist))).to.deep.equal([1, 2]);
    });
    it('should be null array while list = ', function() {
      let llist = arrayToLinkedList([]);
      expect(deleteDuplicates(null)).to.be.a('Null');
    });
    
  });
});
