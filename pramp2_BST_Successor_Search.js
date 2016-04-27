// Given a node n in a binary search tree, explain and code the most efficient way to find the successor of n.
// Analyze the runtime complexity of your solution.

//successor: the smallest node that is greater than n
function findSuccessor (n) {

	if(n.right !== null) {
		n = n.right
		while(n.left !== null) {

			n = n.left;
		}
	}
	return n;

	var ancestor = n.parent;
	var child = n;
	while(ancestor !== null && ancestor.right === child) {

		child = ancestor;
		ancestor = ancestor.parent;
	}

	return ancestor; 
}