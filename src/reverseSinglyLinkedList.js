'use strict';
let { ListNode } = require('../test/utils.js');

/**
 * Reverse a {@link SinglyLinkedList}.
 * @param {SinglyLinkedList} head The head of the list.
 * @returns The new head of the linked list.
 */
function reverseSingly(head) {
  var prev;
  while (head.next) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  head.next = prev;
  return head;
}

module.exports = {
  reverseSingly: reverseSingly
};
