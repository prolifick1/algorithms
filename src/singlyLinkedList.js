class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // O(1)
    let newNode = new Node(val);
    this.length++;
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    // O(n)
    if (!this.head) return undefined;
    this.length--;

    let previous = null;
    let current = this.head;
    while (current.next) {
      previous = current;
      current = current.next;
    }

    if (previous) {
      previous.next = null;
      this.tail = previous;
    } else {
      this.head = this.tail = null;
    }

    return current;
  }

  unshift(val) {
    // O(1)
    let newNode = new Node(val);
    this.length++;

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return this;
  }

  shift() {
    // O(1)
    if (!this.head) return undefined;
    let removed = this.head;
    this.length--;

    if (this.length === 0) {
      this.head = this.tail = null;
    } else {
      this.head = removed.next;
      removed.next = null;
    }

    return removed;
  }

  get(idx) {
    // O(n)
    if (idx < 0 || idx >= this.length) return undefined;
    let current = this.head;
    let count = 0;
    while (count !== idx) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(idx, val) {
    // O(n)
    let node = this.get(idx);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    // Beginning O(1)
    if (idx === 0) return !!this.unshift(val);
    // End O(1)
    if (idx === this.length) return !!this.push(val);
    // Middle O(n) because of this.get
    let node = new Node(val);
    let before = this.get(idx - 1);
    let after = before.next;
    before.next = node;
    node.next = after;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    // Beginning  O(1)
    if (idx === 0) return this.shift();
    // End & Middle O(n)
    if (idx === this.length - 1) return this.pop();
    let before = this.get(idx - 1);
    let removed = before.next;
    let after = removed.next;
    before.next = after;
    removed.next = null;
    this.length--;
    return removed;
  }

  reverse() {
    // O(n)
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let after = null;
    for (let i = 0; i < this.length; i++) {
      let before = current.next;
      current.next = after;
      after = current;
      current = before;
    }
    return this;
  }

  rotate(num) {
    let pos = num % this.length
    let count = 0
    let current = this.head
    let prev = null
    while (count !== pos && current) {
      prev = current
      current = current.next
      count++
    }
    let prevHead = this.head
    let prevTail = this.tail
    prevTail.next = prevHead
    this.head = current
    this.tail = prev
    this.tail.next = null
    return this.head
  }
}

module.exports = SinglyLinked;
