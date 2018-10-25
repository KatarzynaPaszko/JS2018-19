// 9)	With a given start value of 0. Iterate the array and add even items and subtract odd ones.

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98];

function addEvenSubstractOdd(array){
    let result = 0;

    for(let i = 0; i<array.length; i++){
        if(array[i]%2===0) {
            result= result + array[i];
        } else {
            result= result - array[i];
        }
    }
    return result;
}

console.log(addEvenSubstractOdd(arrayOfNumbers));

// 279