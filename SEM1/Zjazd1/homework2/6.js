// 6) For time of this example remove last element from the given array. Create a function that based
// on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20];

function addEverySecondone(array){
  let newArray = [];

  for (let i = 0; i <= array.length; i=i+2) {
    let second;
    if (array[i+1]) {
      second = array[i+1];
    } else {
      second = array[i];
    }
    newArray.push((array[i]+second));
  }
  console.log(newArray);
  return newArray;
}

addEverySecondone(arrayOfNumbers);
