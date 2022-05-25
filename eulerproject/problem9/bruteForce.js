/*

Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a**2 + b**2 = c**2
For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.

Also: a + b + c = {number}

Given a {number}, find the product of the abc. If the number has not pythagorean triplet, return -1.

*/

function bruteForce(number){
    let biggestC = number - 3;
    for(let i = biggestC; i > 0; i--){
        let biggestAOrB = number - i - 1;
        for(let j = biggestAOrB; j > 0 ; j--){
            let a = j;
            let c = i;
            let b = number - a - c;
            if(a**2 + b**2 === c**2 && a+b+c === number){
                console.log(a,b,c)
                return a*b*c;
            }
        }
    }
    return -1;
}

module.exports = {
    bruteForce,
}

