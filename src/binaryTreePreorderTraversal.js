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
var preorderTraversal = function (root) {
    if (!root) {
        return [];
    }
    var result = [];
    if (root) {
        result.push(root.val);
    }
    if (root.left) {
        result = result.concat(preorderTraversal(root.left));
    }
    if (root.right) {
        result = result.concat(preorderTraversal(root.right));
    }
    return result;
};
exports.preorderTraversal = preorderTraversal;
