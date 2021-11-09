let hasCycle = require('../src/linkedListCycle.js');
let { expect } = require('chai');
let {ListNode} = require('./utils.js');

describe('linked list cycle', function() { 
 describe('#hasCycle()', function() {
  beforeEach(function() {
    head = new ListNode(1);
  });
   it('Should exist', function() {
     expect(hasCycle).to.exist;
   });
   if('Should be a function', function() {
     expect(hasCycle).to.be.a('function');
   });
   it('Should take at least 1 argument', function() {
     expect(hasCycle.length).to.be.above(0);
   });
   it('Should return something', function() {
     expect(hasCycle(head)).to.exist;
   });
   it('Should return a boolean', function() {
     expect(hasCycle(head)).to.be.a('Boolean');
   });
   it('Should return false for a linked list with only one node that points to null', function() {
     expect(hasCycle(head)).to.be.false;
   });
   it('Should return true for a linked list with only 1 node that points to itself', function() {
     head.next = head;

     expect(hasCycle(head)).to.be.true;
   });

   it('should return false for a non-cyclical linked list size 2', function() {
     head.next = new ListNode(2);

     expect(hasCycle(head)).to.be.false;
   });
   it('should return true for a cyclical linked list size 2', function() {
     head.next = new ListNode(2);
     head.next.next = head;
     expect(hasCycle(head)).to.be.true;
   });
   it('should return false for a non cyclical list of size 5', function() {
    head.next = new ListNode(2);
     head.next.next = new ListNode(3);
     head.next.next.next = new ListNode(4);
     head.next.next.next.next = new ListNode(5);

     expect(hasCycle(head)).to.be.false;
   });
   it('should return true for a cyclical list of size 5 where the tail links back to head', function() {
    head.next = new ListNode(2);
     head.next.next = new ListNode(3);
     head.next.next.next = new ListNode(4);
     head.next.next.next.next = new ListNode(5);
     head.next.next.next.next.next = head;

     expect(hasCycle(head)).to.be.true;
      
   });
   it('should return true for a cyclical list of size 5 where the tail links to the middle of the list', function() {
    head.next = new ListNode(2);
     head.next.next = new ListNode(3);
     head.next.next.next = new ListNode(4);
     head.next.next.next.next = new ListNode(5);
     head.next.next.next.next.next = head.next.next.next;
     expect(hasCycle(head)).to.be.true;
     
   });
   
   it('should return true given 1>2>2>3', function() {
     head.next = new ListNode(2);
     head.next.next = new ListNode(3);
     head.next.next = head.next;
     
     expect(hasCycle(head)).to.be.true;
   });
  
 })
})
