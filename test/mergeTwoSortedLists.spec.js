var {expect} = require('chai');
let mergeTwoLists = require('../src/mergeTwoSortedLists.js');
var {arrayToLinkedList, linkedListToArray} = require("./utils")


describe('MergeTwoSortedLists:mergeTwoLists', () => {
    
    it('should be null while null, null', () => {
        expect(mergeTwoLists(null, null)).to.eql(null)
    });
        
    
    it('should be [1] while [1], null', () => {
        const linkedListA = arrayToLinkedList([1]);
        const linkedListB = null
        const mergedLinkedList = mergeTwoLists(linkedListA, linkedListB)
        expect(linkedListToArray(mergedLinkedList)).to.eql([1])
    });

    it('should be [1, 2] while [1], [1]', () => {
        const linkedListA = arrayToLinkedList([1]);
        const linkedListB = arrayToLinkedList([1]);
        const mergedLinkedList = mergeTwoLists(linkedListA, linkedListB)
        expect(linkedListToArray(mergedLinkedList)).to.eql([1,1])
    });


    it('should be [1, 2] while [1], [2]', () => {
        const linkedListA = arrayToLinkedList([1]);
        const linkedListB = arrayToLinkedList([2])
        const mergedLinkedList = mergeTwoLists(linkedListA, linkedListB)
        expect(linkedListToArray(mergedLinkedList)).to.eql([1,2])
    }); 

    it('should be [1, 2] while [2], [1]', () => {
        const linkedListA = arrayToLinkedList([2]);
        const linkedListB = arrayToLinkedList([1])
        const mergedLinkedList = mergeTwoLists(linkedListA, linkedListB)
        expect(linkedListToArray(mergedLinkedList)).to.eql([1,2])
    }); 

    it('should be [1, 2, 3, 4] while [1, 4], [2,3]', () => {
        const linkedListA = arrayToLinkedList([1,4]);
        const linkedListB = arrayToLinkedList([2,3]);
        const mergedLinkedList = mergeTwoLists(linkedListA, linkedListB)
        expect(linkedListToArray(mergedLinkedList)).to.eql([1, 2, 3, 4])
    }); 
});
