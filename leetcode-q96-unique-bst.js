// Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

// For example,
// Given n = 3, there are a total of 5 unique BST's.

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    var table = {};
    table[0] = 1;
    table[1] = 1;
    
    for(var i = 2; i <= n; i++) {
        for(var j = 1; j <= i; j++) {
            if(!table[i]) {
                table[i] = 0;
            }
            table[i] += table[i - j] * table[j - 1];
        }
    }
    return table[n];
    
};