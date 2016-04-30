// I have an array where every number in the range 1...n1...n appears once except for one number which appears twice.
// Write a function for finding the number that appears twice.

//first attempt
function findNumTwice(ary) {

	var hash = {};

	for(var i = 0; i < ary.length; i++) {

		if(hash[ary[i]] === 1) return ary[i];
		
		hash[ary[i]] = 1;
	}

	return null;
}

console.log(findNumTwice([1,2,3,4,5,6,7,8,9,10,11,12,10,13])); //10
//O(n) and O(n) space

//second attempt 
function findNumTwice2(ary) {

	var n = ary[ary.length - 1];
	var sum = n*(n + 1) / 2;

	var sumOfAry = 0;
	for(var i = 0; i < ary.length; i++) {

		sumOfAry += ary[i];
	}

	return sumOfAry - sum;
}

console.log(findNumTwice2([1,2,3,4,5,6,7,8,9,10,11,12,10,13])); //10
//O(n) and O(1) space 