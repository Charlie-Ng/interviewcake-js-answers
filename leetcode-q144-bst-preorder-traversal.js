// Given a binary tree, return the preorder traversal of its nodes' values.

var preorderTraversal = function(root) {
    
    var results = [];
    var stack = [];
    var cur = root;
    
    while(stack.length > 0 || cur) {
        
        if(cur) {
            results.push(cur.val);
            stack.push(cur);
            cur = cur.left;
        }
        else {
            cur = stack.pop();
            cur = cur.right;
        }
    }
    return results;

};