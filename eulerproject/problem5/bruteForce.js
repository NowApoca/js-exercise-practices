/*

Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to {maxNumber}?
*/

function bruteForce(maxNumber){
    const numbersToCheck = [];
    for(let i = 0; i < maxNumber ; i++){
        numbersToCheck.push(i)
    }
    let isSmallestNumber;
    let currentN = 1;
    do {
        isSmallestNumber = isDivisibleByAll(currentN, numbersToCheck);
        if(isSmallestNumber){
            return currentN;
        }
        currentN++
    } while(!isSmallestNumber);
}

function isDivisibleByAll(n, numbers){
    for(let number of numbers){
        if(n % number > 0){
            return false
        }
    }
    return true
}

module.exports = {
    bruteForce,
}