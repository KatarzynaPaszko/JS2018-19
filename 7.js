// 7)	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98];
function avarageOfEvenNumbers(array) {
    let counter = 0;
    let sumOfEven = 0;

    for(let i = 0; i<array.length; i++){
        if(array[i]%2===0) {
            counter = counter + 1;
            sumOfEven = sumOfEven + array[i];
        }
    }
    const avarageOfEven = sumOfEven/counter;
    return avarageOfEven;
}

console.log(avarageOfEvenNumbers(arrayOfNumbers));

// 45.142857142857146