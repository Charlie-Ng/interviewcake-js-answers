// Given a non negative integer number num. 
// For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Example:
// For num = 5 you should return [0,1,1,2,1,2].


var countBits = function(num) {
    
    var result = [];
    
    result[0] = 0;
        
    for(var i = 0; i <= num; i++) {
        if(i % 2 === 0) result[i] = result[i/2];
        else result[i] = result[Math.floor(i/2)] + 1;
    }

    return result;
    
};

console.log(countBits(5)); //[ 0, 1, 1, 2, 1, 2 ]
console.log(countBits(10)); //[ 0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2 ]