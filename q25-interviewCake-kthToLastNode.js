//   You have a linked list ↴ and want to find the kth to last node.
// Write a function kthToLastNode() that takes an integer k and the headNode of a singly linked list, 
// and returns the kth to last node in the list.

//given implementation like this
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(JSON.stringify(a));

//implementation of kthToLastNode()
function kthToLastNode (k, head) {

	if(head === null || k === null) return null;

	var length = 0;

	var cur = head;

	while(cur) {

		length++;
		cur = cur.next;
	}

	cur = head;
	if(k > length) return null;

	for(var i = 0; i < length - k; i++) {

		cur = cur.next;
	}
	return cur;
}


console.log(JSON.stringify(kthToLastNode(2, a)));
