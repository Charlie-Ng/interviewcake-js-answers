// You're working with an intern that keeps coming to you with JavaScript code that won't 
// run because the braces, brackets, and parentheses are off. To save you both some time, 
// you decide to write a braces/brackets/parentheses validator.


// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false
// { [ ( ] ) }" should return false, even though each opener can be matched to a closer.

function findMatching(code) {

	var lookup = {
		'[' : ']',
		'(' : ')',
		'{' : '}'
	}

	var openers = ['[', '(', '{'];
	var closer = [']', ')', '}'];

	var stack = [];
	var lastOpen;

	for(var i = 0; i < code.length; i++) {

		if(openers.indexOf(code[i]) > -1) {
			stack.push(code[i]);
		}
		else if(closer.indexOf(code[i]) > -1) {
			if(stack.length === 0) {
				return false;
			}
			lastOpen = stack.pop();
			if(lookup[lastOpen] !== code[i]) {
				return false;
			}
		}
	}

	if(stack.length === 0) {
		return true;
	}

	return false;

}

console.log(findMatching("{ hell[sdf ]fff (ds ) s}"));
console.log(findMatching("{ sdfsdf[ (sdfsdf ] sdfsdf) }"));
console.log(findMatching("{ sdfsdf[sdfsdf }"));
