function myFunction(inputAry) {
    // write the body of your function here
    var newAry = [];

    for(var i = 0; i < inputAry.length; i++) {

    	myFunction(inputAry[i])
    }
    return ;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([1,2,3]));
