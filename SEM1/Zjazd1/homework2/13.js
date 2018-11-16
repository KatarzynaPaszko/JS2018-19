// 13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic
// arithmetic operations.

function  basicOperations(num1, num2){
  let add = num1 + num2;
  console.log('Adding: ' + add);
  let minus = num1 - num2;
  console.log('Substraction: ' + minus);
  let multiply = num1 * num2;
  console.log('Multiplication: ' + multiply);
  let divide = num1 / num2;
  console.log('Division: ' + divide);
  let basicOperationsObject = {
    add: add,
    minus: minus,
    multiply: multiply,
    divide: divide,
  }
  console.log(basicOperationsObject);
  return basicOperationsObject;
}

basicOperations(2,4);
