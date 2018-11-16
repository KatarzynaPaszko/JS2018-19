// 2) Create a function that returns sum of first and last elements of given array.

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function sumOfFirstAndLast(array) {
  let sum = array[0] + array[array.length - 1];
  return sum;
}

sumOfFirstAndLast(arrayOfNumbers);
