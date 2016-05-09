// find the longest palindrome with a given string

function findPalindrome(str) {

	if(str === null) return null;
	var palindrome = "";
	var maxPalindrome = "";

	var len = str.length;

	for(var i = 0; i < len; i++) {

		var temp_i = i;
		for(var j = len - 1; j >= i; j--) {

			if(str[temp_i] === str[j]) {

				temp_i++;

				if(j === i) {

					palindrome = str.substring(i, temp_i);
					if(palindrome.length > maxPalindrome.length) {
						maxPalindrome = palindrome;
					}
				}

			}else {
				temp_i = i;
			}
		}
	}
	return maxPalindrome;
}

console.log(findPalindrome("b112a211aaaaccccccccbbbbbbdcccccccaaaa311sdfsdfsdfkldsflllld"));//cccccccc
console.log(findPalindrome("11cbbc11c1"));//11cbbc11
console.log(findPalindrome("asdfasdfasdfasdfasdffdasasdfddkkddfdsafdafdafdafdasdfasdfsdafasdfasdf")); //asdfddkkddfdsa
console.log(findPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW1234567887654321ZWETYGDE"));