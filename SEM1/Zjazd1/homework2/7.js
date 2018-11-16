// 7) Create a function that return one random element from given array. // use random function

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20, 11];

function returnRandom(array){
  let randomNumber = Math.floor(Math.random() * array.length);
  console.log(array[randomNumber]);
  return array[randomNumber];
}

returnRandom(arrayOfNumbers);
returnRandom(arrayOfNumbers);
returnRandom(arrayOfNumbers);
returnRandom(arrayOfNumbers);
