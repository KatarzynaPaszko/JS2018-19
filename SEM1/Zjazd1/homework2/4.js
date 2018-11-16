// 4) Create a function that returns given array in reverse order. // no build in functions 

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function revertArray(array) {
  let newRevertedArray = [];
  for (let i = 0; i < array.length; i++) {
    newRevertedArray[i] = array[array.length-1-i];
  }
  console.log(newRevertedArray);
  return newRevertedArray;
}

revertArray(arrayOfNumbers);
