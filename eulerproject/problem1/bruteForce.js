/*

Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Find the sum of all the multiples of {[numbers]} below {limit}.

*/

function bruteForceSolution(numbers, limit){
    const results = []
    for(let currentNumber = 0; currentNumber < limit; currentNumber++){
        numbers.forEach(number => {
            if(currentNumber % number == 0){
                results.push(currentNumber);
            }
        })
    }
    return results.reduce((sum, nextNumber) => {
        return sum + nextNumber;
    }, 0)
}

module.exports = {
    bruteForceSolution
}