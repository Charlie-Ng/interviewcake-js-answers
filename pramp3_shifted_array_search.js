// 1. Find a given number num in a sorted array arr:
// arr = [2, 4, 5, 9, 12, 17] 

// 2. If the sorted array arr is shifted left by an unknown offset and you don't have a pre-shifted copy of it, 
// how would you modify your method to find a number in the shifted array?
// shiftArr = [9, 12, 17, 2, 4, 5]

// Explain and code an efficient solution and analyze its runtime complexity
// if num doesn't exist in the array, return -1

// 1. use binary search
function binarySearch(arr, num) {

	if(arr === null) return null;

	var start = 0;
	var end = arr.length;
	var mid;

	while(start <= end) { //it is possible start == end, e.g., arr.length == 1

		mid = Math.floor((start + end ) / 2);
		if(num > arr[mid]) {

			start = mid + 1;
		}
		else if (num < arr[mid]){

			end = mid - 1;
		}
		else {

			return "found it"; 
		}
	}
	return -1;
}
console.log(binarySearch([9, 12, 17], 12)); // found it
console.log(binarySearch([2, 4, 5, 9, 12, 17], 12)); //found it
console.log(binarySearch([1, 1, 1, 1, 1, 1, 2, 4, 5, 6], 6)); //found it

function shiftedSearch(arr, num) {

	if(arr === null) return null;
	var start = findStart2(arr);
	var subArray = [];
	if(num > arr[0]) {

		for(var i = 0; i < start; i++) {
			subArray.push(arr[i]);
		}
		return binarySearch(subArray, num);
	}
	else if(num < arr[0]) {

		for(var i = start; i < arr.length; i++) {
			subArray.push(arr[i]);
		}
		return binarySearch(subArray,num);
	}
	else{
		return "found it";
	}
}

function findStart(arr) { //O(n)

	var startIndex = 0;

	for(var i = 0; i < arr.length - 1; i++) {

		if(arr[i] > arr[i + 1]) {

			startIndex = i + 1;
			break;
		}
	}
	return startIndex;
}

function findStart2(arr) { //O(logn)

	//ex: 9, 12, 17, 18, 2, 4, 5
	var start = 0;
	var end = arr.length;
	var mid;

	while(start <= end) {
		mid = Math.floor((start + end) / 2); //mid is 3 ; mid is 5 ; mid is 4
		if(mid === 0 || arr[mid] < arr[mid - 1]){ //18 < 17 false; 4 < 2 false; 2 < 18 true

			return mid; //2
		}
		if(arr[mid] > arr[0]) { //18 > 9; 

			start = mid + 1; //start is 4
		}
		else {

			end = mid - 1; //4 < 9, so end is 4
		}
	}
	return 0;
}

console.log(shiftedSearch([9, 12, 17, 2, 4, 5], 12)); // found it
console.log(shiftedSearch([9, 12, 13, 14, 15, 16, 7], 7)); // found it
console.log(shiftedSearch([100, 101, 3, 4, 5, 15], 101)); // found it


