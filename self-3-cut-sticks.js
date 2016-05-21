// You are given  sticks, where the length of each stick is a positive integer. A cut operation is performed on the sticks such that all of them are reduced by the length of the smallest stick.

// Suppose we have six sticks of the following lengths:
// 5 4 4 2 2 8

// Then, in one cut operation we make a cut of length 2 from each of the six sticks. For the next cut operation four sticks are left (of non-zero length), whose lengths are the following: 
// 3 2 2 6

// The above step is repeated until no sticks are left.

// Given the length of  sticks, print the number of sticks that are left before each subsequent cut operations.

// Note: For each cut operation, you have to recalcuate the length of smallest sticks (excluding zero-length sticks).

function cutSticks (n, arr) {

	var tempArr = [];
	var min = findSmallest(arr);

	while(arr.length > 0) {

		console.log(arr.length);

		for(var i =0; i < arr.length; i++) {

			arr[i] -= min;
		}

		for(var j = 0; j < arr.length; j++) {

			if(arr[j] > 0) {
				tempArr.push(arr[j]);
			}
		}

		arr = JSON.parse(JSON.stringify(tempArr));
		tempArr = [];

	}

	return "";
}

function findSmallest (arr) {

	var min = arr[0];

	for(var i = 1; i < arr.length; i++) {
		if(min > arr[i]) min = arr[i];
	}
	return min;
}

console.log(cutSticks(6, [5, 4, 4, 2, 2, 8]));
// 6
// 4
// 2
// 1
// 0

console.log(cutSticks(8, [1, 2, 3, 4, 3, 3, 2, 1]));
// 8
// 6
// 4
// 1
