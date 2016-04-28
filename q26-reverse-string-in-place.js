// Write a function to reverse a string in-place.

// note: Although strings in Javascript are considered primititve type,
// Javascript coerces strings as object to allow function call like someString.length.
// strings in Javascript are immutable, which means someString[1] = 'k' does not change the second character to k

function reverse(str) {

	var strAry = str.split('');
	var tempChar;
	var strLength = strAry.length;

	for(var i = 0; i < strLength / 2; i++) {

		tempChar = strAry[i];
		strAry[i] = strAry[strLength - 1 - i];
		strAry[strLength - 1 - i] = tempChar;
	}

	return strAry.join('');

}

console.log(reverse("aaabbbccdddee")); //eedddccbbbaaa
console.log(reverse("kadsjflkasdjfklasdjfklasdjfmmmmmmmmmmm")); //mmmmmmmmmmmfjdsalkfjdsalkfjdsaklfjsdak