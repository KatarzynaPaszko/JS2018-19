// 8)	Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

const arrayOfNumbers = [1,6,23,8,4,98,3,7,3,98,4,98];

function avarageOfEvenIndexes(array){
    let counter = 0;
    let sumOfEven = 0;

    for(let i = 1; i<array.length; i++){
        if(i%2===0) {
            counter = counter + 1;
            sumOfEven = sumOfEven + array[i];
        }
    }
    const avarageOfEven = sumOfEven/counter;
    return avarageOfEven;
}

console.log(avarageOfEvenIndexes(arrayOfNumbers));

//7.4