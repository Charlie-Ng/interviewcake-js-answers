// Write a function fib() that a takes an integer n and returns the nth fibonacci number.

// assume:
// fib(0); // => 0
// fib(1); // => 1
// fib(2); // => 1
// fib(3); // => 2
// fib(4); // => 3
// ...

function findFib(n) {

	if(n < 0) return null;
	if(n === 0 || n === 1) return n;

	var sumSoFar = 0;
	var prev1 = 1;
	var prev2 = 0;

	for(var i = 0; i < n; i++) {

		sumSoFar = prev1 + prev2;
		prev1 = prev2;
		prev2 = sumSoFar;
	}

	return sumSoFar;

}

console.log(findFib(4)); //3

var sequence = [];
for(var i = 0; i <= 10; i++) {

	sequence.push(findFib(i));
}

console.log(sequence); //[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
