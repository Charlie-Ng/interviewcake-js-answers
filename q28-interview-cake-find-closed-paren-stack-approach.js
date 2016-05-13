// Write a function that, given a sentence like the one above, 
// along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis), 
// the output should be 79 (position of the last parenthesis).

//"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

// situation 1 (opening parenthesis is given) 
function findParen(sentence, pos) {

	if(!sentence) return null;

	if(pos < 0 || pos >= sentence.length) return "invalid open parenthesis position";

	var parenCounter = 0;

	for(var i = pos + 1; i < sentence.length; i++) {

		if(sentence[i] === '(') {
			parenCounter++;
		}
		else if(sentence[i] === ')') {
			if(parenCounter === 0) {
				return i;
			}
			else{
				parenCounter--;
			}
			}
		
	}

	return "couldn't find a corresponding parenthesis";
}

console.log(findParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10));

// situation 2 (opening parenthesis is not given) 
function findParenUsingStack(sentence) {

	if(!sentence) return null;

	var parenStack = [];
	var tempChar;

	for(var i = 0; i < sentence.length; i++) {

		tempChar = sentence[i];
		if(tempChar === '(') {
			parenStack.push('(');
		}
		else if(tempChar === ')') {

			if(parenStack.length === 0) {
				return "no matched";
			}
			parenStack.pop();
		}
	}

	if(parenStack.length === 0) {
		return "valid";
	}
	return null;
}

console.log(findParenUsingStack("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."));




