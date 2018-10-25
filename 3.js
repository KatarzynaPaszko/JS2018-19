// 3)	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

const numArray = [1,6,23,8,4,98,3,7,3,98,4,98];

function sumOfOddNumbers(array) {
    let sumOfOddNumbers = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]%2!=0) {
            sumOfOddNumbers = sumOfOddNumbers + array[i];
        }
    }
    return sumOfOddNumbers;  
}

console.log(sumOfOddNumbers(numArray));

// 37