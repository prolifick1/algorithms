/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
"use strict";
var postorderTraversal = function (root) {
    var result = [];
    if (!root) {
        return result;
    }
    function walk(treeNode) {
        if (treeNode.left) {
            walk(treeNode.left);
        }
        if (treeNode.right) {
            walk(treeNode.right);
        }
        result.push(treeNode.val);
    }
    walk(root);
    return result;
};
exports.postorderTraversal = postorderTraversal;
