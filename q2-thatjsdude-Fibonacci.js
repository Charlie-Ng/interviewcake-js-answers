//How do get nth Fibonacci number?

// Interviewer: can you make it recursive?

function findFib(n) {

	if(n == 1 || n == 0) return n;

	return findFib(n - 1) + findFib(n - 2);

}


console.log(findFib(12)); //144
console.log(findFib(3)); //2
console.log(findFib(5)); //5
//O(2^n)
console.log("done part 1");

// use DB
function findFibDB(n) {

	var table = {};
	table[0] = 0;
	table[1] = 1;

	for(var i = 2; i <= n; i++) {
		table[i] = table[i - 1] + table[i - 2]; 
	}

	return table[n];
}

console.log(findFibDB(12));
console.log(findFibDB(3));
console.log(findFibDB(5));
//O(n) 
console.log("done part 2");


