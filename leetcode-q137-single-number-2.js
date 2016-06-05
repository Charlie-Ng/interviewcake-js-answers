// Given an array of integers, every element appears three times except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    var sum = 0;
    var ans = 0;
    for(var i = 0; i < 32; i++) {
        sum = 0;
        for(var j = 0; j < nums.length; j++) {
            if(((nums[j] >> i) & 1) === 1) {
                sum++;
                sum %= 3;
            }
        }
        if(sum !== 0) {
            ans |= sum << i; 
        }
    }
    return ans;
};