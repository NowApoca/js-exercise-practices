/*

Largest palindrome product

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two {numberOfDigits}-digit numbers.

*/

function bruteForce(numberOfDigits){
    let max = 0;
    const maxNumberOfNDigits = parseInt('9'.repeat(numberOfDigits))
    for(let i = maxNumberOfNDigits; i > 0 ; i--){
        for(let j = maxNumberOfNDigits; j > 0 ;j--){
            let mult = j*i;
            if(mult > max && checkIfNumberIsPalindrome(mult)){
                max = mult;
            }
        }
    }
    return max;
}

function checkIfNumberIsPalindrome(number){
    const numberString = number.toString();
    const reverseString = numberString.split("").reverse().join("");
    return numberString === reverseString;
}

module.exports = {
    bruteForce,
}