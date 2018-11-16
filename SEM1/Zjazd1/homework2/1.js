
// ARRAY: [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]
// 1) Create a function that returns the sum of all elements passed in array as parameter. Function
// (array)=&gt;number

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function sumOfArray(array) {
  let sum = array.reduce(function(prev,next){
    return prev+next;
  })
  return sum;
}

sumOfArray(arrayOfNumbers);
