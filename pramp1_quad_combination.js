// Given an array of numbers arr and a number S, find 4 different numbers in arr that sum up to S.

// Write a function that gets arr and S and returns an array with 4 indices of such numbers in arr, or null if no such combination exists.
// Explain and code the most efficient solution possible, and analyze its runtime and space complexity.

var findCombination = function(ary, s) {

	if(ary === null || s === null) return null;
	if(ary.length < 4) return null;

	//make hashing
	var hashTable = {};
	var tempSum = 0;
	for(var i = 0; i < ary.length; i++) {

		for(var j = i + 1; j < ary.length; j++) {

			tempSum = ary[i] + ary[j];
			if(!hashTable[tempSum]) {
				hashTable[tempSum] =[]; //declare an empty ary
			}
			hashTable[tempSum].push([i, j]);
		}
	}

	//find combination
	var pairsA = [];
	var pairsB = [];
	var combination = [];

	for( pairSum in hashTable) {
		if(hashTable[s - pairSum]) {
			pairsA = hashTable[pairSum];
			pairsB = hashTable[s - pairSum];
			combination = checkUniquessness(pairsA, pairsB);
			if(combination !== null) {

				return combination;
			}
		}
	}
	return null;
}

//helper function
var checkUniquessness = function (pairsA, pairsB) {

	for(var i = 0; i < pairsA.length; i++) {

		for(var j = 0; j < pairsB.length; j++) {

			if(pairsA[i][0] === pairsB[j][0] || pairsA[i][0] === pairsB[j][1] ||
				pairsA[i][1] === pairsB[j][0] || pairsA[i][1] === pairsB[j][1]) {

				continue;
			}
			else {

				return [pairsA[i][0], pairsA[i][1], pairsB[j][0], pairsB[j][1]];
			}
		}
	}
	return null;
}

console.log(findCombination([1,3,5,7,8,9], 23)); //output [ 0, 2, 4, 5 ]
console.log(findCombination([1,1,1,6,7,3,8,12], 16)); //output [ 0, 1, 3, 6 ]












