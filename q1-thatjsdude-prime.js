/**
 * Created by kitchiong on 4/6/16.
 */

//1. check Prime
//Question: How would you verify a prime number?

function checkPrime (num) {

    if(num < 2) return false;

    var n = 2;
    while(n < num) {

        if(num % n === 0) {

            return false;
        }
        else {

            n++;
        }
    }
    return true;
}

console.log(checkPrime(31)); //true
console.log(checkPrime(2)); //true
console.log(checkPrime(153)); //false
