// 3) Create a function that takes a number and return factorial of that number.

function factorialOfNumber(number){
  let factorial= 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
  return factorial;
}

factorialOfNumber(3);
factorialOfNumber(5);
