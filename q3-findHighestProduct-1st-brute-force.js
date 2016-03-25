/**
 * Created by kitchiong on 3/24/16.
 */
//Given an arrayOfInts, find the highestProduct you can get from three of the integers.
//The input arrayOfInts will always have at least three integers.

function myFunction(inputAry) {
    // write the body of your function here

    var newAry = [];
    var product = 1;
    for(var i = 0; i < inputAry.length; i++) {

        for(var j = i + 1; j < inputAry.length; j++) {

            for(var k = j + 1; k < inputAry.length; k++) {

                product = inputAry[i] * inputAry[j] * inputAry[k];
                if(newAry.indexOf(product) === -1) {

                    newAry.push(product);
                }
                product = 1;
            }
        }
    }

    var max = newAry[0];

    for(var a = 1; a < newAry.length; a++) {

        if(newAry[a] > max) {

            max = newAry[a];
        }
    }

    return max;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([3, 5, 7, 8, 1, 6, 12]));