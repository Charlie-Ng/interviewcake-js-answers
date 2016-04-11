//Question: How would you remove duplicate members from an array?

//in js way
function removeDup(ary){

	var uniqueAry = [];

	for(var i = 0; i < ary.length; i++) {

		if(ary.lastIndexOf(ary[i]) === i) {

			uniqueAry.push(ary[i]);
		}
	}

	return uniqueAry;
}

console.log(removeDup([1,1,3,4,5,6,7,8,4,2,6,3,4,5,5]));
console.log(removeDup([1,3,3,3,1,5,6,7,8,1]));
//[ 1, 7, 8, 2, 6, 3, 4, 5 ]
// [ 3, 5, 6, 7, 8, 1 ]

//howerver, this messes up the order, so it is wrong if order is required to keep

//second attempt 

function removeDup2(ary) {

	var uniqueAry = [];

	//contruct hash table
	for(var i = 0; i < ary.length; i++) {

		if(uniqueAry.indexOf(ary[i]) === -1) {

			uniqueAry.push(ary[i]);
		}		
	}

	return uniqueAry;
}
console.log(removeDup2([1,1,3,4,5,6,7,8,4,2,6,3,4,5,5]));
console.log(removeDup2([1,3,3,3,1,5,6,7,8,1]));
// [ 1, 3, 4, 5, 6, 7, 8, 2 ]
// [ 1, 3, 5, 6, 7, 8 ]

//order preserved but not the most optimized solution, currently it is sort of O(n^2)

//third attemp (hash table)

function removeDup3(ary) {

	var uniqueAry = [];
	var hash = {};

	for(var i = 0; i < ary.length; i++) {

		if(!hash[ary[i]]) {

			hash[ary[i]] = true;
			uniqueAry.push(ary[i]);
		}
	}

	return uniqueAry;
}
console.log(removeDup3([1,1,3,4,5,6,7,8,4,2,6,3,4,5,5]));
console.log(removeDup3([1,3,3,3,1,5,6,7,8,1]));

// [ 1, 3, 4, 5, 6, 7, 8, 2 ]
// [ 1, 3, 5, 6, 7, 8 ]

// it is O(n) now, cheer!






