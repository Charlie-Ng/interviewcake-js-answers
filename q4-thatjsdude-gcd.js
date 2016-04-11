//Question: How would you find the greatest common divisor of two numbers?


function gcd (a, b) {

	var greatest = 1;
	var divisor = 2;

	if(a < 0) a *= -1;
	if(b < 0) b *= -1;

	if(a < 2 || b < 2) return 1;

	while(a >= divisor && b >= divisor) {

		if(a % divisor === 0 && b % divisor === 0) {

			greatest = divisor;
		}

		divisor++;
	}

	return greatest;

}

console.log(gcd(15, 9)); //3


// recursitve

function gcd2 (a, b) {

	if(b === 0) return a;

	return gcd2(b, a%b);
	//if a > b, we try to take the reminder
	//if b > a, the function swaps them
}
console.log(gcd2(15, 9)); //3

