const { expect } = require('chai');
const Tree = require('../src/treeTraversal');

describe('Tree Traversal Approaches', () => {
  let tree;
  beforeEach('Create new tree', () => {
    tree = new Tree();
  });

  it('breadthFirst method visits each node working horizontally', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    tree.insert(15);
    tree.insert(23);
    // Visual representation
    //      10
    //   5     20
    //  3 8   15 23
    expect(tree.breadthFirst()).to.eql([10, 5, 20, 3, 8, 15, 23]);
  });

  it('preOrder visits each node working vertically: current, left, right', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    tree.insert(15);
    tree.insert(23);
    // Visual representation
    //      10
    //   5     20
    //  3 8   15 23
    expect(tree.preOrder()).to.eql([10, 5, 3, 8, 20, 15, 23]);
  });

  it('inOrder visits each node working vertically: left, current, right', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    tree.insert(15);
    tree.insert(23);
    // Visual representation
    //      10
    //   5     20
    //  3 8   15 23
    expect(tree.inOrder()).to.eql([3, 5, 8, 10, 15, 20, 23]);
  });

  it('postOrder visits each node working vertically: left, right, current', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    tree.insert(15);
    tree.insert(23);
    // Visual representation
    //      10
    //   5     20
    //  3 8   15 23
    expect(tree.postOrder()).to.eql([3, 8, 5, 15, 23, 20, 10]);
  });
});
