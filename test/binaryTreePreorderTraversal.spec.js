
var {expect} = require('chai')
var {preorderTraversal} = require("../src/binaryTreePreorderTraversal")
var { TreeNode } = require("./utils")



describe('BinaryTreePreorderTraversal:preorderTraversal', () => {
    
    it('should be null while root = null', () => {
        expect(preorderTraversal(null)).to.eql([])
    });
        
    
    it('should be [1] while root.val = 1, root.left = root.right = null', () => {
        const root = TreeNode(1);
        expect(preorderTraversal(root)).to.eql([1]);    
    });

    
    it('should be [1,2,3] while root.val = 1, root.left = 2, root.right = 3', () => {
        const root = TreeNode(1);
        root.left = TreeNode(2)
        root.right = TreeNode(3)
        expect(preorderTraversal(root)).to.eql([1,2,3])
    });
        
    it('should be [1,2,3] while root.val = 1, root.left = null, root.right = 2, root.right.left 3', () => {
        const root = TreeNode(1);
        root.right = TreeNode(2);
        root.right.left = TreeNode(3)
        expect(preorderTraversal(root)).to.eql([1,2,3])
    });

});
