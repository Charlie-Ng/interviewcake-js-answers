// Suppose we had an array of n integers in sorted order. 
// How quickly could we check if a given integer is in the array?

// log(n)

function checkElement(ary, num) {

	if(ary === null || num === null) {

		return null;
	}

	var start = 0;
	var end = ary.length - 1;
	var middle = 0;

	while(end >= start) {

		middle =  Math.floor((end + start) / 2);

		if(ary[middle] === num) {

			return true;
		}
		else if(ary[middle] > num) {

			end = middle - 1;
		}
		else {

			start = middle + 1;
		}
	}

	return false;
}

console.log(checkElement([1,4,5,6,3,1,3,5,6,7,4,3,26,35,6,3], 26)); //true
console.log(checkElement([1], 1)); //true
