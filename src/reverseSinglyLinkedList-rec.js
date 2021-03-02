'use strict';

/**
 * Creates a singly linked list node.
 * @constructor
 * @param {Object} data The data associated with this node.
 * @param {SinglyLinkedList} next The next node in the linked list.
 */
function SinglyLinkedList(data, next) {
  this.data = data;
  this.next = next;
}

/**
 * Reverse a {@link SinglyLinkedList}.
 * @param {SinglyLinkedList} head The head of the list.
 * @returns The new head of the linked list.
 */
function reverseSinglyRecursive(head) {
  if(!head.next) {
    return head;
  }
  var newHead = reverseSinglyRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

module.exports = {
  SinglyLinkedList: SinglyLinkedList,
  reverseSinglyRecursive: reverseSinglyRecursive
};