var testAry = [5,3,1,5,2,5,6,7,4,2,34,2];

//implement selection sort
function selectionSort(ary) {

	var smallest;
	var temp;
	for(var i = 0; i < ary.length; i++) {

		smallest = i;
		//find smallest
		for(var j = i + 1; j < ary.length; j++) {

			if(ary[smallest] > ary[j]) {
				smallest = j;
			}
		}

		temp = ary[i];
		ary[i] = ary[smallest];
		ary[smallest] = temp;

	}

	return ary;
}

console.log(selectionSort(testAry));

//implement bubble sort
function bubbleSort(ary) {

	var temp;
	for(var i = 0; i < ary.length; i++) {

		for(var j = ary.length; j > i; j--) {

			if(ary[j] < ary[j - 1]) {

				temp = ary[j - 1];
				ary[j - 1] = ary[j];
				ary[j] = temp;
			}
		}
	}
	return ary;
}

console.log(bubbleSort(testAry));


//implement insertion sort
function insertionSort(ary) {

	var temp;
	var located = false;
	for(var i = 1; i < ary.length; i++) {

		located = false;
		temp = ary[i];
		for(var j = i - 1; j >= 0 && !located;) {

			if(temp < ary[j]) {

				ary[j + 1] = ary[j];
				j--;
			}
			else {
				located = true;
			}
		}
		ary[j + 1] = temp;
	}

	return ary;
}

console.log(insertionSort(testAry));

// [ 1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7, 34 ]
// [ 1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7, 34 ]
// [ 1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7, 34 ]






