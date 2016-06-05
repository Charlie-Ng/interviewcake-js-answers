// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// For example,
// Given nums = [0, 1, 3] return 2.

// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

var missingNumber = function(nums) {
    
    var n = nums.length;
    var sum = (n*(n+1))/2;
    var sum2 = 0;
    for(var i = 0; i < nums.length; i++) {
        sum2 += nums[i];
    }
    
    return sum - sum2;
    
};