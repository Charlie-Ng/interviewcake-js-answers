// Given an array of integers, every element appears twice except for one. Find that single one.
var singleNumber = function(nums) {
    
    nums.sort();
    for(var i = 0; i < nums.length - 1; i = i+2) {
    
        if(nums[i] != nums[i + 1]) return nums[i];
    }
    
    return nums[nums.length - 1];
};

console.log(singleNumber([2,2,3,4,3,5,4,5,6,8,7,6,8])); //7