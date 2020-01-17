class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // O(1)
    let node = new Node(val);
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    return this;
  }

  pop() {
    // O(1)
    if (!this.head) return undefined;
    let removed = this.tail;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    return removed;
  }

  unshift(val) {
    // O(1)
    let node = new Node(val);
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
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
      this.head.prev = null;
      removed.next = null;
    }
    return removed;
  }

  get(idx) {
    // O(n)
    if (idx < 0 || idx >= this.length) return undefined;
    let mid = Math.floor(this.length / 2);
    let isLess = idx < mid;
    let current = isLess ? this.head : this.tail;
    let count = isLess ? 0 : this.length - 1;
    while (count !== idx) {
      if (isLess) {
        current = current.next;
        count++;
      } else {
        current = current.prev;
        count--;
      }
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
    // Middle O(n) for searching
    let before = this.get(idx - 1);
    let after = before.next;
    let node = new Node(val);
    before.next = node;
    after.prev = node;
    node.prev = before;
    node.next = after;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    // Beginning O(1)
    if (idx === 0) return this.shift();
    // End O(1) --> Better than singly linked
    if (idx === this.length - 1) return this.pop();
    // Middle O(n) for searching
    let removed = this.get(idx);
    let before = removed.prev;
    let after = removed.next;
    before.next = after;
    after.prev = before;
    removed.next = removed.prev = null;
    this.length--;
    return removed;
  }

  reverse() {
    // O(n)
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    for (let i = 0; i < this.length; i++) {
      let before = current.next;
      let after = current.prev;
      current.prev = before;
      current.next = after;
      current = before;
    }
    return this;
  }
}

module.exports = DoublyLinked;
