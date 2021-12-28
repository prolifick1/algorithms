var {expect} = require('chai')
var {inorderTraversal, inorderTraversal2} = require("../src/binaryTreeInorderTraversal")
var { TreeNode } = require("./utils")



describe('BinaryTreeInorderTraversal:inorderTraversal', () => {
    
    it('should be [] while treenNode = null', () => {
        expect(inorderTraversal(null)).to.eql([])
    });
        
    
    it('should be [1] while treeNode.left = treeNode.right = null', () => {
        const node = TreeNode(1);
        expect(inorderTraversal(node)).to.eql([1])
    });
        
    
    it('should be [1,3,2] while tree = [1,null, 2,3]', () => {
        const tree = TreeNode(1);
        tree.left = null;
        tree.right = TreeNode(2);
        tree.right.left = TreeNode(3);
        expect(inorderTraversal(tree)).to.eql([1,3,2])
    });
    
    it('should be [1,3,2] while tree = [1, 5, 2,3]', () => {
        const tree = TreeNode(1);
        tree.left = TreeNode(5);
        tree.right = TreeNode(2);
        tree.right.left = TreeNode(3);
        expect(inorderTraversal(tree)).to.eql([5,1,3,2])
    });

});
    

describe('BinaryTreeInorderTraversal:inorderTraversal2', () => {
    
    it('should be [] while treenNode = null', () => {
        expect(inorderTraversal2(null)).to.eql([])
    });
        
    
    it('should be [1] while treeNode.left = treeNode.right = null', () => {
        const node = TreeNode(1);
        expect(inorderTraversal2(node)).to.eql([1])
    });
        
    
    it('should be [1,3,2] while tree = [1,null, 2,3]', () => {
        const tree = TreeNode(1);
        tree.left = null;
        tree.right = TreeNode(2);
        tree.right.left = TreeNode(3);
        expect(inorderTraversal2(tree)).to.eql([1,3,2])
    });
    
    it('should be [1,3,2] while tree = [1, 5, 2,3]', () => {
        const tree = TreeNode(1);
        tree.left = TreeNode(5);
        tree.right = TreeNode(2);
        tree.right.left = TreeNode(3);
        expect(inorderTraversal2(tree)).to.eql([5,1,3,2])
    });

});
