var {expect} = require('chai')
var {postorderTraversal} = require("../src/binaryTreePostorderTraversal")
var {TreeNode} = require("./utils")


describe('BinaryTreePostorderTraversal:postorderTraversal', () => {
    
    it('should be [] while tree = null', () => {
        expect(postorderTraversal(null)).to.eql([])
    });
        
    
    it('should be [2,3,1] while tree.val=1, tree.left = 2, tree.right = 3', () => {
        const root = TreeNode(1);
        root.left = TreeNode(2);
        root.right = TreeNode(3);
        expect(postorderTraversal(root)).to.eql([2,3,1])
    });
        

    it('should be [3,1] while tree.val=1, tree.left = null, tree.right = 3', () => {
        const root = TreeNode(1);
        root.right = TreeNode(3);
        expect(postorderTraversal(root)).to.eql([3,1])
    });

    it('should be [3,2,1] while tree.val=1, tree.left = null, tree.right = 2, tree.right.left = 3', () => {
        const root = TreeNode(1);
        root.right = TreeNode(2);
        root.right.left = TreeNode(3)
        expect(postorderTraversal(root)).to.eql([3,2,1])
    });
});
