/*

Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below {number}.

*/


function bruteForce(number){
    let sum = 0;
    if(number > 2){
        sum += 2;
    }
    for(let currentNumber = 3; currentNumber < number ; currentNumber+=2){
        if(isPrime(currentNumber)){
            sum += currentNumber
        };
    }
    return sum;
}

function isPrime(number){
    if(number == 2 || number == 3){
        return true;
    }
    if(number == 1 || !number || number % 2 == 0){
        return false;
    }
    for(let i = 3; i < number; i+=2){
        if(number%i === 0){
            return false;
        }
    }
    return true;
}

module.exports = {
    bruteForce
}
