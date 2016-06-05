// Given a non-empty array of integers, return the k most frequent elements.

// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size

var topKFrequent = function(nums, k) {
    
    var hash = {};
    var result = [];
    for(var i = 0; i < nums.length; i++) {
        var temp = nums[i];
        
        if(hash[temp]) {
            hash[temp] += 1;
        }
        else {
            hash[temp] = 1;
        }
    }
    
    var ary = [];
    
    for(var key in hash) {
        
        ary.push({num: key, val: hash[key]});
    }
    
    ary.sort(function(a, b) {
       
       return b.val - a.val; 
    });
    
    for(var j = 0; j < k; j++) {
        result.push(Number(ary[j].num));
    }
    return result;
};