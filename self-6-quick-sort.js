//implement quick sort

function quickSort(ary, left, right) {

	if(ary === null) return null;

	var i = left;
	var j = right;
	var pivot = ary[Math.floor((left + right) / 2)];
	var temp;

	while(i <= j) {

		while(ary[i] < pivot) i++;
		while(ary[j] > pivot) j--;

		if(i <= j) {

			temp = ary[i];
			ary[i] = ary[j];
			ary[j] = temp;
			i++;
			j--;
		}
	}

	if(left < j) {

		quickSort(ary, left, j);
	}

	if(i < right) {

		quickSort(ary, i, right);
	}

	return ary;
}

var testAry0 = [4,2,5,6,8,3,5,4,5,4,33,43,4];
var testAry1 = [0, -1, -3, 4, -5];
var testAry3 = [];

console.log(quickSort(testAry0, 0, testAry0.length - 1));
console.log(quickSort(testAry1, 0, testAry1.length - 1));
console.log(quickSort(testAry3, 0, testAry3.length - 1));

// [ 2, 3, 4, 4, 4, 4, 5, 5, 5, 6, 8, 33, 43 ]
// [ -5, -3, -1, 0, 4 ]
// []
