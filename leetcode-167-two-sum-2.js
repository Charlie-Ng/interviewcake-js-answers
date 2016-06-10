// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

// You may assume that each input would have exactly one solution.

// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    var table = {};
    
    for(var i = 0; i < numbers.length; i++) {
        
        if(!table[numbers[i]]) {
            table[numbers[i]] = [];
        }
        table[numbers[i]].push(i + 1);
    }
    
    console.log(table);
    
    for(var key in table) {
        var complement = target - key;
        if(table[complement]) {
            var aryA = table[key];
            var aryB = table[complement];
            
            for(var j = 0; j < aryA.length; j++) {
                
                for(var k = 0; k < aryB.length; k++) {
                    
                    if(aryA[j] !== aryB[k] && aryA[j] < aryB[k]) {
                    
                        return [aryA[j], aryB[k]];
                        
                    }
                }
            }
        }
    }
    
    return [];
};


// take the advantage of sorted array
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    var start = 0;
    var end = numbers.length - 1;
    
    while(start < end) {
        
        var sum = numbers[start] + numbers[end];
        if(sum === target) {
            
            return [start + 1, end + 1];
        }
        if(sum > target) {
            
            end = end - 1;
        }
        else {
            
            start = start + 1;
        }
    }
    
    return [];
};