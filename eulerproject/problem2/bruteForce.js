/*

#2 Even Fibonacci numbers - Project Euler

Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed {limit},
find the sum of the even-valued if filter = {'even'}, {'odd'}, or undefined if no filters terms.

*/

function bruteForce(limit, filter){
    const numbers = [];
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; n1 <= limit; i++) {
        let shouldAddNumber = false; 
        if(filter == 'even' && n1 % 2 == 0){
            shouldAddNumber = true;
        }
        if(filter == 'odd' && n1 % 2 == 1){
            shouldAddNumber = true;
        }
        if(!filter){
            shouldAddNumber = true;
        }
        if(shouldAddNumber){
            numbers.push(n1);
        }
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return numbers.reduce((sum, nextNumber) => sum + nextNumber, 0)
}

module.exports = {
    bruteForce
}
