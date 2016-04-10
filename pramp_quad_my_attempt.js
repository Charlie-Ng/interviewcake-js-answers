// Given an array of numbers arr and a number S, find 4 different numbers in arr that sum up to S.

// Write a function that gets arr and S and returns an array with 4 indices of such numbers in arr, or null if no such combination exists.
// Explain and code the most efficient solution possible, and analyze its runtime and space complexity.

function find_quad (ary, s) {

	if(ary.length < 4) {

		return null;
	}
	else if(ary.length === 4) {

		if(ary[0] + ary[1] + ary[2] + ary[3] === s) return ary;
	}

	var hashTable = {}; //declare a hashtable 
	var tempSum = 0;

	for(var i = 0; i < ary.length; i++) {

		for(var j = i + 1; j < ary.length; j++) {

			tempSum = ary[i] + ary[j];
			if(!hashTable[tempSum]) {
				hashTable[tempSum] = [];
			}
			hashTable[tempSum].push([i , j]);
		}
	}

	var arrayA = [];
	var arrayB = [];
	var result = [];

	for(key in hashTable) {

		if(hashTable[s - key]) {

			arrayA = hashTable[key];
			arrayB = hashTable[s - key];
			result = checkUniqueness(arrayA, arrayB);
			if(result) {

				return result;
			}

		}
	}

	return null;
}

function checkUniqueness(aryA, aryB) {

	for(var i = 0; i < aryA.length; i++) {

		for(var j = 0; j < aryB.length; j++) {

			if(aryA[i][0] === aryB[j][0] || aryA[i][0] === aryB[j][1] ||
				aryA[i][1] === aryB[j][0] || aryA[i][1] === aryB[j][1]) {

				continue;
			}
			else {

				return [aryA[i][0], aryA[i][1], aryB[j][0], aryB[j][1]];
			}
		}
	}

	return null;


}



console.log(find_quad([5, 5, 4, 5, 7, 8, 9], 19)); //[ 0, 2, 1, 3 ]
console.log(find_quad([1, 1, 3, 4, 5, 6,7,8,3,2,5,3,2, 19], 28)); //[ 0, 1, 6, 13 ]


