// 4)	Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

const numbersArray = [1,6,23,8,4,98,3,7,3,98,4,98];

function findMinAndMax(array){
    let minNumber = array[0];
    let maxNumber=array[0];

    for(let i = 0; i<array.length; i++){
        if(array[i]>maxNumber) {
            maxNumber = array[i];
        }
        if(array[i]<minNumber) {
            minNumber = array[i];
        }
    }
    return (
        console.log('Min number is ' + minNumber +  ' and Max number is ' 
        + maxNumber));
} 
findMinAndMax(numbersArray);
// Min number is 1 and Max number is 98