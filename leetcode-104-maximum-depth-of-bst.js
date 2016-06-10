// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if(root === null) return 0;
    
    var leftCount = maxDepth(root.left);
    var rightCount = maxDepth(root.right);
    return leftCount > rightCount ? leftCount + 1: rightCount + 1;
};