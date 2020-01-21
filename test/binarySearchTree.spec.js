const { expect } = require('chai');
const BinarySearchTree = require('../src/binarySearchTree');

describe('Binary Search Tree Implementation', () => {
  let BST;

  beforeEach('Create new BST', () => {
    BST = new BinarySearchTree();
  });

  it('Insert method adds new nodes', () => {
    expect(BST.root).to.equal(null);
    expect(BST.insert(23)).to.eql({
      root: { val: 23, left: null, right: null },
    });
    expect(BST.insert(5)).to.eql({
      root: { val: 23, left: { val: 5, left: null, right: null }, right: null },
    });
    expect(BST.insert(35)).to.eql({
      root: {
        val: 23,
        left: { val: 5, left: null, right: null },
        right: { val: 35, left: null, right: null },
      },
    });
  });

  it('Find methods finds values', () => {
    expect(BST.find(20)).to.equal(false);
    BST.insert(40);
    expect(BST.find(40)).to.equal(true);
    expect(BST.find(25)).to.equal(false);
    BST.insert(35);
    BST.insert(55);
    BST.insert(3);
    BST.insert(300);
    BST.insert(7);
    expect(BST.find(35)).to.equal(true);
    expect(BST.find(999)).to.equal(false);
    expect(BST.find(300)).to.equal(true);
    expect(BST.find(55)).to.equal(true);
    expect(BST.find(11)).to.equal(false);
    expect(BST.find(20)).to.equal(false);
    expect(BST.find(3)).to.equal(true);
    expect(BST.find(7)).to.equal(true);
  });
});
