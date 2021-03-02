const {
  expect
} = require('chai');

var SinglyLinkedList = require('../src/reverseSinglyLinkedList.js').SinglyLinkedList;
var reverseSinglyRecursive = require('../src/reverseSinglyLinkedList-rec.js').reverseSinglyRecursive;

describe('SinglyLinkedListRecursive', function () {
  'use strict';

  describe('Reversing a single element linked list', function () {
    it('should not change the list', function () {
      var list = new SinglyLinkedList(1);
      expect(list.data).to.equal(1);
      expect(list.next).to.equal(undefined);
      reverseSinglyRecursive(list);
      expect(list.data).to.equal(1);
      expect(list.next).to.equal(undefined);
    });
  });

  describe('Reversing a 2 element linked list', function () {
    it('should correctly reverse the list', function () {
      var list = new SinglyLinkedList(1, new SinglyLinkedList(2));
      list = reverseSinglyRecursive(list);
      expect(list.data).to.equal(2);
      expect(list.next.data).to.equal(1);
      expect(list.next.next).to.equal(null);
    });
  });

  describe('Reversing a 3 element linked list', function () {
    it('should correctly reverse the list', function () {
      var list = new SinglyLinkedList(1, new SinglyLinkedList(2, new SinglyLinkedList(3)));
      list = reverseSinglyRecursive(list);
      expect(list.data).to.equal(3);
      expect(list.next.data).to.equal(2);
      expect(list.next.next.data).to.equal(1);
      expect(list.next.next.next).to.equal(null);
    });
  });
});
