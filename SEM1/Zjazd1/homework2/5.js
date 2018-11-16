// 5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b,
// c+d, e+f] [1,3,4,1,0,3] => [4,5,3] function(array)=>array

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20, 11];

function addEverySecondone(array){
  let newArray = [];

  for (let i = 0; i < array.length; i=i+2) {
    newArray.push(array[i]+array[i+1]);
  }
  console.log(newArray);
  return newArray;
}

addEverySecondone(arrayOfNumbers);
