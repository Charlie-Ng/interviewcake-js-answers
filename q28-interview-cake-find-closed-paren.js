// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

//first attempt array of arrays
function findClosedParen(sentence, openParen) {

	//building array
	var openAry = [];
	var closeAry = [];
	for(var i = 0; i < sentence.length; i++) {

		if(sentence[i] == '(') {
			openAry.push(i);
		}
		if(sentence[i] == ')') {
			closeAry.push(i);
		}
	}

	if(openAry.length !== closeAry.length) return "incorrect paren numbers";

	for(var j = 0; j < openAry.length; j++) {

		if(openAry[j] === openParen) {

			return closeAry[closeAry.length - 1 - j];
		}
	}

	return "incorrect openParen parameter";

}

console.log(findClosedParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10));
//79

console.log(findClosedParen("(So(when I nest them (my) a (like this (and this))).)", 3));
//50

//second attempt one pass 
function findClosedParen2(sentence, openParen) {


	if(openParen > sentence.length - 1) return "incorrect openParen parameter";

	var openCounter = 0;
	var tempChar;

	for(var i = openParen; i < sentence.length; i++) {
		tempChar = sentence[i];
		if(tempChar == '(') openCounter++;
		else if(tempChar == ')') openCounter--;
		
		if(openCounter === 0) return i;
	}

	return "close paren not found";
}

console.log(findClosedParen2("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10));
//79

console.log(findClosedParen2("(So(when I nest them (my) a (like this (and this))).)", 3));
//50