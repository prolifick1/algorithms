/*
Travesing a Tree:
- Visiting every single node in a tree
- Doesn't matter how many nodes there are or how they are ordered
- This example uses a BST, but DOES NOT need to!
- Breadth First Search: Starting from root and working across the tree horizontally. Level 1, level 2, level 3, etc.
  - Create a queue
  - Place the root node in the queue
  - As long as there is anything in the queue:
    - Dequeue a node and push the value of the node into visited list
    - If left node exists, push into queue
    - If right node exists, push into queue
  - Return visited values list at the end
- Depth First Search: Starting from root working down the tree vertically
  - Create a variable to store the values of nodes visited
    - Store the root of the BST in a vairable called current
    - Write a help function which accepts a node.
      - Push the value of the node to the variable that stores the values
      - If left node exits, call the helper on the left node
      - If right node exits, call the helper on the right node
  - In Order
    - If left node exists, continue left
    - Visit current node
    - If right node exists, continue right
  - Pre-Order
    - Visit current node
    - If left node exists, continue left
    - If right node exists, continue right
  - Post-Order
    - If left node exists, continue left
    - If right node exists, continue right
    - Visit current node
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // O(log(n)) *if tree is balanced*
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (val >= current.val) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            break;
          }
        } else {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            break;
          }
        }
      }
    }
    return this;
  }
  /*
  Breadth First Search
  Time - O(n) visits each node once
  Space - Uses less space than depth first on narrow, deep trees
  */
  breadthFirst() {
    let queue = [];
    let data = [];
    if (this.root) queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      // if this was not a binary tree you could iterate over the children array
      // in order to push into children into the queue
    }
    return data;
  }

  /*
  Depth First Search
  Time - O(n) visits each node once
  Space - Uses less space than breadth first on wide, shallow trees
  */

  // Can be useful for flattening a tree to recreate as a BST in the future
  preOrder(node = this.root, data = []) {
    if (node) {
      data.push(node.val);
      if (node.left) this.preOrder(node.left, data);
      if (node.right) this.preOrder(node.right, data);
    }
    return data;
  }

  // End up with a set of nodes from least to greatest
  inOrder(node = this.root, data = []) {
    if (node) {
      if (node.left) this.inOrder(node.left, data);
      data.push(node.val);
      if (node.right) this.inOrder(node.right, data);
    }
    return data;
  }

  postOrder(node = this.root, data = []) {
    if (node) {
      if (node.left) this.postOrder(node.left, data);
      if (node.right) this.postOrder(node.right, data);
      data.push(node.val);
    }
    return data;
  }
}

module.exports = Tree;
