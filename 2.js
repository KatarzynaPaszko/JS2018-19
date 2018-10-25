// 2)	Calculate factorial of 7.

function factorial(num) {
    let factorialResult = 1;
    for (let i = 1; i <=num; i++) {
        factorialResult = factorialResult*i;
    }
    return factorialResult;
}

console.log(factorial(7));

// 5040