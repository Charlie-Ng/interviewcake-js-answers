// You have a singly-linked list and want to check if it contains a cycle.
// A singly-linked list is built with nodes, where each node has:

// node.next—the next node in the list.
// node.data—the data held in the node. For example, 
// if our linked list stores people in line at the movies, node.data might be the person's name.

// implement a singly-linked 
function Node(val) {
	this.val = val;
	this.next = null;
}

//without cycle
var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');

A.next = B;
B.next = C;
C.next = D;
D.next = E;

//with cycle
var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = b;

function checkCycle(node) {

	var cur = node;
	var curX2 = node;

	while(curX2 && curX2.next) { //length is even, we check if curX2 exits. If length is odd, we check if curX2 exits.

		cur = cur.next;
		curX2 = curX2.next.next;

		if(cur === curX2) {

			return true;
		}
	}

	return false;
}

console.log(checkCycle(A)); //false
console.log(checkCycle(a)); //true


