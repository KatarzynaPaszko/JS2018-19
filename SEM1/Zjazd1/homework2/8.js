// 8) Create a function that takes two parameters array and number off attempts. Based on number
// of attempts choose a random number from table that many times and return lowest one.

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20, 11];

function lowestRandowm(array, number) {
  let newArray = [];
  for (let i = 1; i <= number; i++) {
    newArray.push(array[Math.floor(Math.random() * array.length)]);
  }

  let lowestNumber = Math.min(...newArray);
  console.log(newArray);
  console.log(lowestNumber);
  return lowestNumber;
}

lowestRandowm(arrayOfNumbers, 8);
