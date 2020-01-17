/*

- Abstract Data Type (ADT)
- LIFO - Last In First Out
- Last element to be added is the first to be removed
- Can be implemented via linked lists or arrays
- Arrays -> Use push / pop in order to be O(1)
- Linked Lists -> Use shift / unshift in order to be O(1)
  - Conventionally still named push / pop

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // O(1)
    let node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this.length;
  }

  pop() {
    // O(1)
    if (!this.head) return undefined;
    let removed = this.head;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    } else {
      this.head = removed.next;
    }
    return removed.val;
  }
}

module.exports = Stack;
