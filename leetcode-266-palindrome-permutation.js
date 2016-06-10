// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
// "code" -> False, "aab" -> True, "carerac" -> True.

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    
    var table = {};
    
    for(var i = 0; i < s.length; i++) {
        
        var char = s[i];
        if(!table[char]) {
            table[char] = true;
        }
        else {
            delete table[char];
        }
    }
    
    return Object.keys(table).length <=1;
    
};