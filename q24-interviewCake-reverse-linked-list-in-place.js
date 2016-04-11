// Write a function for reversing a linked list . Do it in-place.

// Your function will have one input: the head of the list.

// Your function should return the new head of the list.

//in-place means without making new copies of the value


//implementation of node
function node (value) {

	this.value = value;
	this.next = null;
}

//constrct our list
var nodeA = new node("A");
var nodeB = new node("B");
var nodeC = new node("C");
var nodeD = new node("D");

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
console.log(JSON.stringify(nodeA));
//{"value":"A","next":{"value":"B","next":{"value":"C","next":{"value":"D","next":null}}}}

function reverseLinkedList(list) {

	var pre = null;
	var node = list;
	var save = null;

	while(node) {

		save = node.next;

		node.next = pre;

		pre = node;

		node = save;
	}

	return pre;
}

console.log(JSON.stringify(reverseLinkedList(nodeA)));
//{"value":"D","next":{"value":"C","next":{"value":"B","next":{"value":"A","next":null}}}}
console.log(JSON.stringify(nodeD));



// Bonus
// This in-place reversal destroys the input linked list. 
// What if we wanted to keep a copy of the original linked list? 
// Write a function for reversing a linked list out-of-place.


function reverseOutPlace(list) {


	var ary = [];
	while(list) {

		ary.push(new node(list.value));
		list = list.next;
	}

	for(var i = ary.length - 1; i > 0; i--) {

		ary[i].next = ary[i - 1];
	}

	return ary[ary.length - 1];
}

console.log(JSON.stringify(reverseOutPlace(nodeD)));
// {"value":"A","next":{"value":"B","next":{"value":"C","next":{"value":"D","next":null}}}}




