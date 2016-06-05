// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

var majorityElement = function(nums) {
    
    var hash = {};
    for(var i = 0; i < nums.length; i++) {
        var temp = nums[i];
        
        if(hash[temp]) {
            hash[temp] += 1;
        }
        else {
            hash[temp] = 1;
        }
    }
    
    for(var key in hash) {
        if(hash[key] > Math.floor(nums.length/2)) {
            return Number(key);
        }
    }
    return null;
};