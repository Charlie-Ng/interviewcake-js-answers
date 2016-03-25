function myFunction(ary) {

    // write the body of your function here
    if(ary.length === 0) return "ary length is 0";

    if(ary.length === 1) return 0;

    var newAry = [];
    var product = 1;
    for(var i = 0; i < ary.length; i++) {
        
        for(var j = 0; j < ary.length; j++) {

            if(i !== j) {

                product *= ary[j];
            }
        }
        newAry.push(product);
        product = 1;
    }
    return newAry;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([1, 7, 3, 4]));