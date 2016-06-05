// Given a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function(root) {
    
    var results = [];
    var stack = [];
    var cur = root;
    while(stack.length > 0 || cur) {
        
        if(cur) {
            stack.push(cur);
            cur = cur.left;
        }
        else {
            cur = stack.pop();
            results.push(cur.val);
            cur = cur.right;
        }
    }
    
    return results;
};