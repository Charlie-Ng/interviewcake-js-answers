// Write a function to find the 2nd largest element in a binary search tree ↴ .

function find2ndLargestBST (root) {

	var secondLargest;

	while(root.right !== null) {
		secondLargest = root.value;
		root = root.right;
	}

	if(root.left !== null) {
		secondLargest = root.left.value;
		while(root.right !== null) {
			root = root.right;
			secondLargest = root.value;
		}
	}
	
	else {
		return secondLargest;
	}
}

function find2ndLargestBST2 (root) {

	var cur = root;

	if(cur.left === null && cur.right === null) {
		return "at least two nodes";
	}

	while(cur) {

		//case1: cur is the largest and has a left child
		if(cur.left && !cur.right) {
			cur = cur.left;
			while(cur.right) {
				cur = cur.right;
			}
			return cur.value;
		}

		//case2: cur is the parent of largest
		if(cur.right && !cur.right.right && !cur.right.left) {
			return cur.value;
		}
	}
}
