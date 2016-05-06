// You have an array of integers, 
// and for each index you want to find the product of every integer except the integer at that index.

function findProduct(arr) {

	var productSoFar = 1;
	var result = [];

	for(var i = 0; i < arr.length; i++) {

		result.push(productSoFar);
		productSoFar *= arr[i];
	}

	productSoFar = 1;
	for(var i = arr.length - 1; i >=0; i--) {

		result[i] *= productSoFar;
		productSoFar *= arr[i];
	}

	return result;
}

console.log(findProduct([1, 7, 3, 4]));