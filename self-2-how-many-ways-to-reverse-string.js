// how many ways can you reverse a string?

//JS bulit-in function
function jsBulitIn (str) {
	if(str !== null) 
		return str.split('').reverse().join('');

	return str;
}

console.log(jsBulitIn("charlieng"));

//traditional
function traditional(str) {
	var temp;
	var newString = str.split(''); //string in js is immutual
	var length = str.length;
	for(var i = 0; i < length / 2; i++) {
		temp = newString[i];
		newString[i] = newString[length - 1 - i];
		newString[length - 1 - i] = temp;
	}
	return newString.join('');
}

console.log(traditional("charlieng"));

//stack
function node (val) {
	this.val = val;
	this.next = null;
}

function stackHead () {
	this.count = 0;
	this.top = null
}

function popStack(stack) {
	if(stack === null) return null;
	var returnVal = stack.top.val;
	var tempPtr = stack.top;

	stack.top = stack.top.next;
	tempPtr = null;

	return returnVal;
}

function stackReverse (str) {

	if(str === null) return null;

	var stack = new stackHead();

	for(var i = 0; i < str.length; i++) {
		var temp = new node(str[i]);
		temp.next = stack.top;
		stack.top = temp;
		stack.count++;
	}

	var newString = "";
	while(stack.top) {
		newString += popStack(stack);
	}

	return newString;
}

console.log(stackReverse("charlieng"));

//js array (act like stack)
function Stack() {

	this.stack = new Array();
	this.pop = function() {
		return this.stack.pop();
	}
	this.push = function(val) {
		this.stack.push(val);
	}
}

function jsReStr (str) {

	var newStack = new Stack();
	for(var i = 0; i < str.length; i++) {
		newStack.push(str[i]);
	}

	var newStr = "";
	while(newStack.stack.length > 0) {
		newStr += newStack.pop()
	}

	return newStr;
}

console.log(jsReStr("charlieng"));

//recursvie
function rerestr(str) {

	//base case
	if(str === null || str.length === 1) return str;

	return rerestr(str.substring(1)) + str[0];
}

console.log(rerestr("charlieng"));

