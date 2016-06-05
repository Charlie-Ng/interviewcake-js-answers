// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

var intersection = function(nums1, nums2) {
    
    var result = [];
    var hash = {};
    
    for(var i = 0; i < nums1.length; i++) {
        
        if(!hash[nums1[i]]) {
            hash[nums1[i]] = 1;
        }
    }
    
    for(var j = 0; j < nums2.length; j++) {
        
        if(hash[nums2[j]] === 1) {
            hash[nums2[j]] += 1;
        }
    }
    
    for(var key in hash) {
        if(hash[key] === 2) {
            result.push(Number(key));
        }
    }
    return result;  
};

//accepted