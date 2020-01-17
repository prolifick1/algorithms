/*

- Abstract Data Type (ADT)
- FIFO - First In First Out
- First element to be added is the first to be removed
- Can be implemented via linked lists or arrays
- Arrays -> Use shift / push OR unshift / pop
  - In either case, one method is O(1) and other is O(n)
- Linked Lists -> Use shift / push in order to be O(1)
  - For queues, best to implement via linked list
- Convention to call enqueue / dequeue

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
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

module.exports = Queue;
