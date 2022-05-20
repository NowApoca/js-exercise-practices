/*

Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.
What are the prime factors of the {number}

*/

function bruteForce(n){
    const factors = [];
    let divisor = 2;
    while(n >= 2){
        if(n % divisor == 0){
            factors.push(divisor);
            n = n / divisor
        } else {
            divisor++
        }
    }
    return factors
}

module.exports = {
    bruteForce
}