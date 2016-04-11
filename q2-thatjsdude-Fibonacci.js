//How do get nth Fibonacci number?

function findFibonacci(n) {

	var fib = [1 , 1]; //or [0, 1]

	if(n <= 2) return 1; // or 1

	for(var i = 2; i < n; i++) {

		fib[i] = fib[i - 1] + fib[i - 2];
	}

	return fib[n - 1];
}

console.log(findFibonacci(12)); //144
console.log(findFibonacci(3)); //2
console.log(findFibonacci(5)); //5
//O(n)
console.log("done part 1");

// Interviewer: can you make it recursive?

function findFib(n) {

	if(n == 1 || n == 0) return n;

	return findFib(n - 1) + findFib(n - 2);

}


console.log(findFib(12)); //144
console.log(findFib(3)); //2
console.log(findFib(5)); //5

//O(2^n)