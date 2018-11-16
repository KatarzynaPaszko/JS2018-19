// 9) Create a function that takes given array. Then takes a random element, removes it from the
// array and pushes it to result arrays. This takes place as long as there are elements in source
// array.


const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20, 11];


function createNewArray(array) {
  let newArray = [];
  for (let i = array.length; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);
    newArray.push(array[randomIndex]);
    array.splice( randomIndex, 1);
  }
  console.log(newArray);
  return newArray;
}

createNewArray(arrayOfNumbers);
