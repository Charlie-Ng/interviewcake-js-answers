function myFunction(ary) {

    // write the body of your function here
    if(ary.length === 0) return "ary length is 0";

    if(ary.length === 1) return 0;

    var tempAry = [];
    var newAry = [];
    var product = 1;
    for(var i = 0; i < ary.length; i++) {
        
        tempAry = ary.slice(i);
        for(var j = 0; j < tempAry.length; j++) {

        	product *= tempAry[j];
        }
        newAry.push(product);
        product = 1;
    }
    return newAry;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([1, 7, 3, 4]));