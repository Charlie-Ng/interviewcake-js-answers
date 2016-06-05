// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

var isAnagram = function(s, t) {
    
    if(s.length !== t.length) {
        return false;
    }
    var sAry = s.split('');
    var tAry = t.split('');
    
    sAry.sort();
    tAry.sort();
    
    for(var i = 0; i < sAry.length; i++) {
        if(sAry[i] !== tAry[i]) return false;
    }
    
    return true;
};