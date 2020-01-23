/*
- Priority Queue
    - Elements have a priority associated
    - Higher priority elements are served first
    - Will use a min binary heap implementation

  -Enqueue method accepts a value and priority
    - Makes a new node and puts it in the correct spot
    based on priority
  -Dequeue methods removes root element, returns it,
  and rearranges heap using priority

*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parentIdx < 0 || parent.priority < element.priority) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }
  enqueue(val, priority) {
    const task = new Node(val, priority);
    this.values.push(task);
    this.bubbleUp();
    return this;
  }

  sinkDown() {
    let idx = 0;
    const element = this.values[0];
    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let swapIdx = null;
      let leftChild;
      let rightChild;

      if (leftIdx < this.values.length) {
        leftChild = this.values[leftIdx];
        if (leftChild.priority < element.priority) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < this.values.length) {
        rightChild = this.values[rightIdx];
        if (
          rightChild.priority < element.priority &&
          rightChild.priority < leftChild.priority
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null) break;

      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  }
  dequeue() {
    if (!this.values.length) return undefined;
    else if (this.values.length === 1) {
      return this.values.pop().val;
    }
    const top = this.values[0];
    const bottom = this.values.pop();
    this.values[0] = bottom;
    this.sinkDown();
    return top.val;
  }
}

module.exports = PriorityQueue;
