// 10) Create a function that on given array will perform operation of adding or subtracting elements.
// Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)


const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20, 11];

function reduceArray(array) {
  let reducedAmount = 0;
  for (let i = 0; i < array.length; i++) {
    let randomNumber = Math.random();
    if (randomNumber>=0.5) {
      reducedAmount += array[i];
    } else {
      reducedAmount -= array[i];
    }
  }
  console.log(reducedAmount);
}

reduceArray(arrayOfNumbers);
reduceArray(arrayOfNumbers);
reduceArray(arrayOfNumbers);
