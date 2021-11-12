const {
  expect
} = require('chai');

var { ListNode, linkedListToArray } = require('./utils.js');
var { reverseSingly } = require('../src/reverseSinglyLinkedList.js');

describe('SinglyLinkedList', function () {
  'use strict';

  describe('Reversing a single element linked list', function () {
    it('should not change the list', function () {
      var list = new ListNode(1);
      expect(linkedListToArray(reverseSingly(list))).to.deep.eq([1]);
    });
  });

  describe('Reversing a 2 element linked list', function () {
    it('should correctly reverse the list', function () {
      var list = new ListNode(1);
      list.next = new ListNode(2);
      expect(linkedListToArray(reverseSingly(list))).to.deep.eq([2, 1]);
    });
  });

  describe('Reversing a 3 element linked list', function () {
    it('should correctly reverse the list', function () {
      var list = new ListNode(1);
      list.next = new ListNode(2);
      list.next.next = new ListNode(3);
      expect(linkedListToArray(reverseSingly(list))).to.deep.eq([3, 2, 1]);
    });
  });
});
