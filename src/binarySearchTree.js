/*

Overview
- Top most node is referred to as the 'root'
- Each node references 0 - 2 nodes
- Node can only point to a child, not to parent or sibiling
- Must only have one entry point (one root)
- Leaf is a node without any children
- Edge is the connection between one node and another
- Trees are nonlinear
- Different pathways
- Special type of Binary Tree with additional rules:
  - Sorted in a particular way
  - All nodes to the left of a parent are less
  - All nodes to the right of a parent are greater than or equal to

Practical Applications
- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Computer File Systems

Pseudo Code
- Create a new node
- Starting at the root
  - Ceck if there is a root, if not - new node is root
  - If there is a root, check if the value is greater than or less than
  - If greater
    - Check to see if there is a node to the right
      -If there is, move to that node and repeat these steps
      -If there is not, add that node as the right property
  - If less
    - Check to see if there is a node to the left
        -If there is, move to that node and repeat these steps
        -If there is not, add that node as the left property
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
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

  find(val) {
    // O(log(n)) *if the tree is balanced*
    let current = this.root;
    while (current) {
      if (current.val === val) return true;
      else if (current.val > val) current = current.left;
      else current = current.right;
    }
    return false;
  }
}

module.exports = BinarySearchTree;
