/*

10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the {position}st prime number?

*/


function bruteForce(position){
    let primeCounter = 0;
    let currentN = 1;
    do{
        if(isPrime(currentN)){
            primeCounter++;
        }
        if(primeCounter === position){
            return currentN;
        }
        currentN++;
    }while(currentN < (Number.MAX_SAFE_INTEGER - 1));r
    return -1;
}

function isPrime(number){
    if(number == 1){
        return false;
    }
    if(number == 2){
        return true;
    }
    if(number % 2 == 0){
        return false;
    }
    for(let i = 3; i < number ; i+=2){
        if(number%i == 0){
            return false;
        }
    }
    return true;
}

module.exports = {
    bruteForce,
}