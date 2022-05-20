/*

Sum square difference

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and
the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first {nNaturalNumbers} natural
numbers and the square of the sum.

*/

function bruteForce(nNaturalNumbers){
    let sumOfNaturalNumbers;
    if(nNaturalNumbers % 2 == 0){
        sumOfNaturalNumbers = (nNaturalNumbers + 1)*(nNaturalNumbers/2);
    } else {
        sumOfNaturalNumbers = ((nNaturalNumbers - 1) + 1)*((nNaturalNumbers - 1)/2) + nNaturalNumbers;
    }
    let squareOfSums = sumOfNaturalNumbers**2;
    let sumOfSquares = 0;
    for(let i = 1; i < (nNaturalNumbers + 1); i++){
        sumOfSquares += i**2;
    }
    return squareOfSums - sumOfSquares;
}

module.exports = {
    bruteForce,
}