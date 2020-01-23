/*

Overview:
- Heaps are a type of tree
- Very similar to a binary search tree, with some different rules
- Binary Heap:
  - At most two child nodes
  - No gaurentees between sibilings, could be greater than or less than or equal to
  - Always as compact as possible, meaning it will fill up a level before
    moving on to the next level
  - Starts by filling up the left side first moves towards right
- Min Heap:
  - Parent nodes are always smaller than child nodes
- Max Heap:
  - Parent nodes are always larger than child nodes
- Use cases:
  - Priority Queue
    - Elements have a priority associated
    - Higher priority elements are served first
  - Graph Traversal
- Binary Heaps can be stored using an Array
- To find children from parent: left = 2n + 1, right = 2n + 2
- To find parent from child: Math.floor((n - 1) / 2)
- Insert method - O(log N)
  - Add to the end
  - Bubble up to the correct position
    - Compare to parent and swap as needed
    - Continue swaping until settled
- Remove method - O(log N)
  - Remove the root
  - Replace with the most recently added
  - Adjust (sink down)
- Search - O(log N)
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }
  insert(val) {
    let childIdx = this.values.push(val) - 1;
    while (
      childIdx > 0 &&
      this.values[childIdx] > this.values[this.getParentIdx(childIdx)]
    ) {
      let parentIdx = this.getParentIdx(childIdx);
      let temp = this.values[childIdx];
      this.values[childIdx] = this.values[parentIdx];
      this.values[parentIdx] = temp;
      childIdx = parentIdx;
    }
    return this;
  }

  extractMax() {
    if (!this.values.length) return undefined;
    else if (this.values.length === 1) {
      return this.values.pop();
    }
    // remove the top value
    let max = this.values[0];
    // replace top value with most recently added
    let end = this.values.pop();
    this.values[0] = end;

    // move the new top idx into position
    let idx = 0;
    const element = this.values[0];

    while (true) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let swapIdx = null;

      // If leftChild is larger, set swapIdx
      let leftChild = this.values[leftIdx];
      if (leftChild > element) {
        swapIdx = leftIdx;
      }

      // If rightChild is larger and left and parent, update swapIdx
      let rightChild = this.values[rightIdx];
      if (rightChild > element && rightChild > leftChild) {
        swapIdx = rightIdx;
      }

      // If neither left or right child is larger, break
      if (swapIdx === null) break;

      // Otherwise, swap parent with largest child
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }

    // return removed value
    return max;
  }
}

module.exports = MaxBinaryHeap;
