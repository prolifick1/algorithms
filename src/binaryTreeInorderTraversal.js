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
var inorderTraversal = function (root) {
    var result = [];
    if (!root) {
        return result;
    }
    if (root.left) {
        result = result.concat(inorderTraversal(root.left));
    }
    result.push(root.val);
    if (root.right) {
        result = result.concat(inorderTraversal(root.right));
    }
    return result;
};

exports.inorderTraversal = inorderTraversal;
var inorderTraversal2 = function (root) {
    var result = [];
    var nodesArray = [];
    var currentNode = root;
    while (currentNode || nodesArray.length) {
        while (currentNode) {
            nodesArray.push(currentNode);
            currentNode = currentNode.left;
        }
        var last = nodesArray.pop();
        result.push(last.val);
        currentNode = last.right;
    }
    return result;
};
exports.inorderTraversal2 = inorderTraversal2;
