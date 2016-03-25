/**
 * Created by kitchiong on 3/24/16.
 */
function myFunction(ary) {

    var newAry = [];
    var productSoFar = 1;

    for(var i = 0; i < ary.length; i++) {

        newAry[i] = productSoFar;
        productSoFar *= ary[i];
    }

    productSoFar = 1;

    for(var j = ary.length - 1; j >= 0; j--) {

        newAry[j] *= productSoFar;
        productSoFar *= ary[j];
    }

    return newAry;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([1, 7, 3, 4]));