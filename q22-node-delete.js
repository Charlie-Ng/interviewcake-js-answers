// Delete a node from a singly-linked list , given only a variable pointing to that node.
// also implement singly-linked list

//implementation for singly-linked list
function node(value) {

	this.value = value;
	this.next = null;
}

//construct singly-linked list
var nodeA = new node("A");
var nodeB = new node("B");
var nodeC = new node("C");
var nodeD = new node("D");

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

console.log(JSON.stringify(nodeA));
// {"value":"A","next":{"value":"B","next":{"value":"C","next":null}}}

function deleteNode(nodeDeleted){

	if(nodeDeleted.next === null) {

		nodeDeleted.value = null; 
		throw new Error("keep in mind node value was assigned to null instead of deleted");
	}
	//This is one of the potential problems. Say we have A->B->C, where C is the one we wanna delete.
	//the above if statement will make the list as A->B->null but it is a node with value "null"
	//it is not a good practice we have a non-dead node with value null! 

	else {

		nodeDeleted.value = nodeDeleted.next.value;
		nodeDeleted.next = nodeDeleted.next.next;
	}
}

deleteNode(nodeB);

console.log(JSON.stringify(nodeA));
//{"value":"A","next":{"value":"C","next":{"value":"D","next":null}}}


/**

	say in our case we want to delete nodeB.

	one potential problem: if there is a pointer to nodeB somewhere else in our code,
	the pointer still has the value (if the old value is a primitive type) after we "delete".
	(we didn't actually delete the node but just assigned the value and next to a new value and a new next)

	second potential problem: if there is a pointer to nodeC, the pointer to the nodeC is not reachable if 
	we walk down the list. Moreover, if we make the pointer point to null, C and D will not be reachable.
	e.g. we now have A->C->D but somePtr->C->D where C and D are not reachable if we make somePtr point to null.
**/

