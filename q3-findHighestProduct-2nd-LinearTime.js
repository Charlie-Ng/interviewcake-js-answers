/**
 * Created by kitchiong on 3/24/16.
 */
/**
 * Created by kitchiong on 3/24/16.
 */
//Given an arrayOfInts, find the highestProduct you can get from three of the integers.
//The input arrayOfInts will always have at least three integers.

function myFunction(inputAry) {
    // write the body of your function here

    if(inputAry.length < 3) {

        return "invalid length";
    }

    if(inputAry.length === 3) {

        return inputAry[0] * inputAry[1] * inputAry[2];
    }

    var int1;
    var int2;
    var int3;

    int1 = inputAry[0];
    for(var i = 0; i < inputAry.length; i++) {

        if(inputAry[i] > int1) int1 = inputAry[i];
    }

    inputAry.splice(inputAry.indexOf(int1), 1);

    int2 = inputAry[0];
    for(var j = 0; j < inputAry.length; j++) {

        if(inputAry[j] > int2) int2 = inputAry[j];
    }

    inputAry.splice(inputAry.indexOf(int2), 1);

    int3 = inputAry[0];
    for(var k = 0; k < inputAry.length; k++) {

        if(inputAry[k] > int3) int3 = inputAry[k];
    }

    return int1*int2*int3;

}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([3, 5, 7, 8, 1, 6, 12]));