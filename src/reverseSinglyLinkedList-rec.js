'use strict';

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

module.exports = reverseSinglyRecursive;
